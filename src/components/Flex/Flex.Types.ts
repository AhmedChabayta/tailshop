import { VariantProps } from "class-variance-authority";
import { GeneralInterface } from "../General.Types";
import { flex } from "./Flex.styles";

export interface FlexProps
  extends GeneralInterface,
    React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flex> {}
