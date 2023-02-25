import React from 'react';
import { ButtonProps } from './Button.Types';
import { button } from './Button.Styles';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      children,
      intent,
      size,
      variant,
      className,
      type = 'button',
      ...rest
    } = props;

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={ref}
        className={button({ intent, size, variant, className })}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
