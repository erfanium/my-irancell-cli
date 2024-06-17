import { ConfigStore, StaticShit } from "./config.js";
import { jwtDecode } from "jwt-decode";
import qs from "node:querystring";

export interface MyIrancellApiCtorParams {
  configStore: ConfigStore;
}

export interface Account {
  active_offers: ActiveOffer[];
  cumulative_amounts: CumulativeAmount[];
  shared_offers: null;
  main_account_balance: number;
  wow_charge: WowCharge;
}

export interface ActiveOffer {
  calculation_type: string;
  expiry_date: string;
  global_data_remaining: number;
  global_data_used: number;
  is_gift: boolean;
  is_roaming: boolean;
  local_data_remaining: number;
  local_data_used: number;
  local_messenger_remaining: number;
  local_messenger_used: number;
  offer_code: string;
  remained_amount: number;
  start_date: string;
  total_amount: number;
  type: string;
  name: string;
}

export interface CumulativeAmount {
  type?: string;
  total?: number;
  remained?: number;
  shared_data?: null[];
  shared_fund?: null[];
}

export interface WowCharge {
  main_amount: number;
  main_expiry: string;
  gifts: unknown[];
}

export interface Offer {
  upc_code: string;
  offer_id: string;
  sub_type: string;
  sim_type: string;
  category: string;
  offer_type: string;
  profile_type: string;
  price: number;
  auto_renewal: string;
  giftable: boolean;
  giftable_code: unknown;
  duration: string;
  duration_unit: string;
  title: string;
  description: string;
  details: Details;
  tags: unknown[];
  cra_info: CraInfo;
  volume?: number;
  bandwidth: unknown;
  source: string;
}

export interface Details {}

export interface PaymentMethodsResult {
  transaction_id: string;
  response_time: number;
  command_status: string;
  response_msg: string;
  order_id: string;
  reference_id: string;
  amount: number;
  available_balance: number;
  digital_wallet_balance: number;
  service: string;
  offer_code: string;
  loyalty_points_to_redeem: number;
  payment_modes: PaymentMode[];
}

export interface PaymentMode {
  mode: string;
  id: string;
  desc: string;
  balance: number;
  points: number;
  discount: number;
  rf1: unknown;
  rf2: unknown;
  available: string;
  bank_details: BankDetail[];
  tax: string;
  auth_code: string;
}

export interface BankDetail {
  bank_id: number;
  bank_name: string;
  location: string;
  url: string;
  created_date: number;
  created_user: unknown;
  bank_code: string;
  status: number;
  class_path: unknown;
  bank_icon: string;
  bank_retry_count: number;
  bank_name_farsi: string;
  bank_display_order: number;
}

export interface CraInfo {
  description: string;
  code: string;
  url_link: string;
}

export class MyIrancellApi {
  #configStore: ConfigStore;
  constructor(params: MyIrancellApiCtorParams) {
    this.#configStore = params.configStore;
  }

  async #fetch<T = unknown>(params: {
    path: string;
    method: "GET" | "POST";
    authorization?: string;
    body?: unknown;
  }): Promise<T> {
    const response = await fetch(`https://my.irancell.ir/api${params.path}`, {
      method: params.method,
      headers: {
        "Accept-Language": "en",
        ...(params.authorization
          ? { Authorization: params.authorization }
          : {}),

        ...(params.body ? { "Content-Type": "application/json" } : {}),
      },
      body: params.body ? JSON.stringify(params.body) : undefined,
    });

    if (response.status !== 200) {
      const error = await response.text();
      throw new Error(`fetch error. status:${response.status} body:${error}`);
    }

    return response.json();
  }

  async #getAccessToken(): Promise<string> {
    const config = this.#configStore.get();
    if (!config.refresh_token) {
      throw new Error("Not logged in");
    }

    if (!config.access_token || isJwtExpired(config.access_token)) {
      const { access_token: newAccessToken } = await this.#fetch<{
        access_token: string;
      }>({
        method: "POST",
        path: "/authorization/v1/token",
        authorization: config.access_token,
        body: {
          grant_type: "refresh_token",
          refresh_token: config.refresh_token,
          ...StaticShit,
        },
      });

      this.#configStore.set({
        access_token: newAccessToken,
      });

      return newAccessToken;
    }

    return config.access_token;
  }

  async login(phone: string, password: string) {
    const result = await this.#fetch<{
      access_token: string;
      refresh_token: string;
    }>({
      method: "POST",
      path: "/authorization/v1/token",
      body: {
        grant_type: "password",
        phone_number: phone,
        password,
        ...StaticShit,
      },
    });

    this.#configStore.set({
      access_token: result.access_token,
      refresh_token: result.refresh_token,
    });

    return result;
  }

  async logout() {
    const config = this.#configStore.get();

    if (config.refresh_token) {
      await this.#fetch<unknown>({
        method: "POST",
        path: "/authorization/v1/logout",
        authorization: config.access_token,
        body: {
          refresh_token: config.refresh_token,
        },
      });
    }

    this.#configStore.set({
      access_token: undefined,
      refresh_token: undefined,
    });
  }

  async getAccount() {
    const result = await this.#fetch<Account>({
      method: "GET",
      path: "/sim/v3/account",
      authorization: await this.#getAccessToken(),
    });

    return result;
  }

  async getOffers() {
    const result = await this.#fetch<Offer[]>({
      method: "GET",
      path: "/catalog/v2/offers?type=data&category=normal",
      authorization: await this.#getAccessToken(),
    });

    return result;
  }

  async getPaymentMethods(params: {
    service: "NormalBolton";
    amount: number;
    offer_code: string;
    bank_list_required: true;
  }) {
    const result = await this.#fetch<PaymentMethodsResult>({
      method: "GET",
      path: `/payment/v2/methods?${qs.stringify(params)}`,
      authorization: await this.#getAccessToken(),
    });

    return result;
  }

  async initPayment(params: {
    amount: number;
    bank_id: number;
    callback_type: "web";
    offer_code: string;
    order_id: string;
    payment_mode_id: string;
    reference_id: string;
    service: "NormalBolton";
  }) {
    const result = await this.#fetch<{ redirection_url: string }>({
      method: "POST",
      path: `/payment/v2/initiate`,
      authorization: await this.#getAccessToken(),
      body: params,
    });

    return result;
  }
}

interface JwtPayload {
  exp: number;
}

const isJwtExpired = (token: string): boolean => {
  try {
    const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
};
