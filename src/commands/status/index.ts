import CliTable from "cli-table3";

import { AuthorizedCommand } from "../../command.js";
import { TableCommon } from "../../table.js";

export default class Status extends AuthorizedCommand {
  static description = "Show account status";

  async run(): Promise<void> {
    const data = await this.api.getAccount();

    const table = new CliTable({
      ...TableCommon,
      head: ["Offer Code", "Name", "Expiry", "Data Used", "Data Remaining"],
      colWidths: [15, 30, 15, 15, 15],
    });

    for (const offer of data.active_offers) {
      const expiryDate = Date.parse(offer.expiry_date);
      const now = Date.now();

      //convert milliseconds to days
      var daysRemaining = Math.round((expiryDate-now)/(1000*3600*24));

      //if expired, days remaining set to zero
      if(daysRemaining<0){
        daysRemaining=0
      }

      const globalDataUsedGB = (offer.global_data_used / 1024).toFixed(2);
      const globalDataRemainingGB = (
        offer.global_data_remaining / 1024
      ).toFixed(2);

      table.push([
        offer.offer_code,
        offer.name,
        `in ${daysRemaining} days`,
        globalDataUsedGB + " GB",
        globalDataRemainingGB + " GB",
      ]);
    }

    this.log(table.toString());
  }
}
