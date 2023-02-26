import React from 'react';
import { InputInterfaceProps } from './Input.Types';

const Input = React.forwardRef<HTMLInputElement, InputInterfaceProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return <input className={className} ref={ref} {...rest} />;
  }
);
Input.displayName = 'Input';
export default Input;
