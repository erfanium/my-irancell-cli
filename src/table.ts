import CliTable from "cli-table3";

const TableCommon = {
  chars: {
    top: "",
    "top-mid": "",
    "top-left": "",
    "top-right": "",
    bottom: "",
    "bottom-mid": "",
    "bottom-left": "",
    "bottom-right": "",
    left: "",
    "left-mid": "",
    mid: "",
    "mid-mid": "",
    right: "",
    "right-mid": "",
    middle: " ",
  },
  style: { "padding-left": 0, "padding-right": 0 },
};

export const makeTable = ({
  head,
  rows,
  colWidths,
}: {
  head: string[];
  rows: string[][];
  colWidths: number[];
}) => {
  const t = new CliTable({
    ...TableCommon,
    head,
    colWidths,
  });

  t.push(...rows);

  return t;
};
