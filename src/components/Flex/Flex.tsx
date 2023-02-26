import React from 'react';
import { FlexProps } from './Flex.Types';
import { flex } from './Flex.styles';

const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { children, className, direction, ...rest } = props;
  return (
    <div ref={ref} {...rest} className={flex({ className, direction })}>
      {children}
    </div>
  );
});
Flex.displayName = 'Flex';
export default Flex;
