import React from 'react';
import { Code } from '../../../src/components';
import classnames from 'classnames';
import { Elements, TypographyProps } from './Typography.Types';

const Typography = React.forwardRef<
  React.HTMLAttributes<Elements> | React.LabelHTMLAttributes<HTMLLabelElement>,
  TypographyProps
>((props, ref) => {
  const { as = 'p', className, children, ...rest } = props;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {as === 'code' ? (
        <Code className={className}>{children}</Code>
      ) : (
        React.createElement(
          as,
          {
            ref,
            className: classnames(className),
            ...rest,
          },
          children
        )
      )}
    </>
  );
});
Typography.displayName = 'Typography';
export default Typography;
