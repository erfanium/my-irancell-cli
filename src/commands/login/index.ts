import inquirer from "inquirer";
import { AuthorizedCommand } from "../../command.js";

export default class Login extends AuthorizedCommand {
  static description = "Login to a new account";

  async run() {
    const { username } = await inquirer.prompt({
      type: "input",
      name: "username",

      message: "Username (phone starting with 98):",
    });

    const { password } = await inquirer.prompt({
      type: "password",
      name: "password",
      message: "Password:",
    });

    await this.api.login(username, password);

    this.log("login success");
  }
}
