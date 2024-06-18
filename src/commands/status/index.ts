import { AuthorizedCommand } from "../../command.js";
import { makeTable } from "../../table.js";

export const formatSize = (sizeInMegaBytes: number): string =>
  `${(sizeInMegaBytes / 1024).toFixed(2)} GB`;

export default class Status extends AuthorizedCommand {
  static description = "Show account status";

  async run(): Promise<void> {
    const rtf = new Intl.RelativeTimeFormat("en", {
      style: "long",
      numeric: "auto",
    });

    const data = await this.api.getAccount();

    const table = makeTable({
      head: ["Offer Code", "Name", "Expiry", "Data Used / Remaining"],
      colWidths: [15, 30, 15, 30],
      rows: data.active_offers.map((offer) => [
        offer.offer_code,
        offer.name,
        rtf.format(
          Math.round(
            (Date.parse(offer.expiry_date) - Date.now()) / (1000 * 60 * 60 * 24)
          ),
          "day"
        ),
        `${formatSize(
          offer.total_amount - offer.remained_amount
        )} / ${formatSize(offer.total_amount)}`,
      ]),
    });

    this.log(table.toString());
  }
}
