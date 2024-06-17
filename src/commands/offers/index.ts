import CliTable from "cli-table3";

import { AuthorizedCommand } from "../../command.js";
import { TableCommon } from "../../table.js";

export default class Offers extends AuthorizedCommand {
  static description = "List all available offers";

  async run(): Promise<void> {
    const data = await this.api.getOffers();

    const orderByDuration = data
      .filter((item) => item.category !== "smart-bundle")

      .sort((a, b) => {
        const aDuration = Number(a.duration);
        const bDuration = Number(b.duration);
        return aDuration - bDuration;
      });

    const table = new CliTable({
      ...TableCommon,
      head: ["Offer Code", "Title", "Price", "Per Gig Price"],
      colWidths: [15, 30, 15, 15],
    });

    for (const offer of orderByDuration) {
      table.push([
        offer.offer_id,
        offer.title,
        Math.round(offer.price / 10_000).toLocaleString() + "T",
        offer.volume
          ? (offer.price / 10_000 / (offer.volume / 1024)).toFixed(1) + "T"
          : "-",
      ]);
    }

    this.log(table.toString());
  }
}
