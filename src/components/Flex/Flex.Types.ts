import { VariantProps } from "class-variance-authority";

import { flex } from "./Flex.styles";
import { GeneralProps } from "@src/GeneralTypes/General.Types";

export interface FlexProps
  extends GeneralProps,
    React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flex> {}
