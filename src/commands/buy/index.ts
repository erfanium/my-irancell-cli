import { Args } from "@oclif/core";
import { AuthorizedCommand } from "../../command.js";
import inquirer from "inquirer";
import open from "open";

export default class Buy extends AuthorizedCommand {
  static description = "Buy an offer";

  static args = {
    offerId: Args.string(),
  };

  async run(): Promise<void> {
    const {
      args: { offerId },
    } = await this.parse(Buy);

    if (!offerId) {
      this.error("Offer ID is required");
    }

    const offer = (await this.api.getOffers()).find(
      (o) => o.offer_id === offerId
    );

    if (!offer) {
      this.error(`Offer with ID ${offerId} not found`);
    }

    this.log(
      `Purchasing offer ${offer.title} for ${Math.round(
        offer.price / 10_000
      ).toLocaleString()}T ...`
    );

    const paymentMethodsResult = await this.api.getPaymentMethods({
      service: "NormalBolton",
      amount: offer.price,
      offer_code: offer.upc_code,
      bank_list_required: true,
    });

    const firstPaymentMode = paymentMethodsResult.payment_modes[0];

    const selectedBank: { bank_id: number } = await inquirer.prompt({
      type: "list",
      name: "bank_id",
      message: "Select a payment gateway:",
      choices: firstPaymentMode.bank_details.map((bank) => ({
        name: bank.bank_name,
        value: bank.bank_id,
      })),
    });

    if (!selectedBank.bank_id) {
      this.error("No bank selected");
    }

    const { redirection_url } = await this.api.initPayment({
      amount: offer.price,
      bank_id: selectedBank.bank_id,
      callback_type: "web",
      offer_code: offer.upc_code,
      order_id: paymentMethodsResult.order_id,
      payment_mode_id: firstPaymentMode.id,
      reference_id: paymentMethodsResult.reference_id,
      service: "NormalBolton",
    });

    open(redirection_url);
  }
}
