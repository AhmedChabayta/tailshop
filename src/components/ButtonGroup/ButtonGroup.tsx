import React from 'react';
import { ButtonGroupInterface } from './ButtonGroup.interface';

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupInterface>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <div
        className={`flex items-center space-x-4 ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';
export default ButtonGroup;
