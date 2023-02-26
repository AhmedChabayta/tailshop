import { VariantProps } from 'class-variance-authority';
import { GeneralProps } from '@src/GeneralTypes/General.Types';
import { flex } from './Flex.styles';

export interface FlexProps
  extends GeneralProps,
    React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flex> {}
