import { default as fse } from "fs-extra";
import path from "node:path";

export const StaticShit = {
  device_name: "Web Linux",
  client_id: "4725a997e94b372b1c26e425086f4a17",
  client_secret:
    "7e9379a4d444a3c21cf28da6a032154dc4b644eba523e7684f71818dec3beeb7",
  client_version: "4.3.3",
  installation_id: "678c8721-0285-4223-8fbf-d93b378b66e7",
};

export interface Config {
  access_token?: string;
  refresh_token?: string;
}

export class ConfigStore {
  #dir: string;
  #path: string;
  constructor(configDir: string) {
    this.#dir = configDir;
    this.#path = path.join(configDir, "config.json");
  }

  get(): Config {
    try {
      return fse.readJsonSync(this.#path);
    } catch {
      fse.ensureDirSync(this.#dir);
      fse.writeJSONSync(this.#path, {});
      return {};
    }
  }

  set(config: Config) {
    const current = this.get();
    fse.writeJSONSync(this.#path, {
      ...current,
      ...config,
    });
  }
}
