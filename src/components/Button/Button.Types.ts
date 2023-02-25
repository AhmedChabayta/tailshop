import { VariantProps } from "class-variance-authority";
import { GeneralInterface } from "../General.Types";
import { button } from "./Button.Styles";

export interface ButtonProps
  extends GeneralInterface,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
