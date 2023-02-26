import { VariantProps } from 'class-variance-authority';
import { GeneralProps } from '../../GeneralTypes/General.Types';

import { button } from './Button.Styles';

export interface ButtonProps
  extends GeneralProps,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
