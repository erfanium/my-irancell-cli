import { AuthorizedCommand } from "../../command.js";

export default class Logout extends AuthorizedCommand {
  static description = "Logout from account";

  async run() {
    await this.api.logout();

    this.log("Logged out");
  }
}
