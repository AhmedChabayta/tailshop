import { cva } from "class-variance-authority";

export const flex = cva("flex", {
  variants: {
    direction: {
      row: ["flex-row"],
      col: ["flex-col"],
    },
    justify: {
      start: ["justify-start"],
      center: ["justify-center"],
      end: ["justify-end"],
      between: ["justify-between"],
      around: ["justify-around"],
      evenly: ["justify-evenly"],
    },
    align: {
      start: ["items-start"],
      center: ["items-center"],
      end: ["items-end"],
      stretch: ["items-stretch"],
      baseline: ["items-baseline"],
    },
  },
  compoundVariants: [],
});
