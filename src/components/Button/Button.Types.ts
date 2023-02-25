import { GeneralProps } from './../../GeneralTypes/General.Types';
import { VariantProps } from "class-variance-authority";

import { button } from "./Button.Styles";

export interface ButtonProps
  extends GeneralProps,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
