import { Command } from "@oclif/core";
import { MyIrancellApi } from "./api.js";
import { ConfigStore } from "./config.js";

export abstract class AuthorizedCommand extends Command {
  api = new MyIrancellApi({
    configStore: new ConfigStore(this.config.configDir),
  });
}
