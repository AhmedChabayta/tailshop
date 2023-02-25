import React from "react";
import classnames from "classnames";
import { FlexProps } from "./Flex.Types";
import { flex } from "./Flex.styles";

const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { children, className, direction, ...rest } = props;
  return (
    <div
      ref={ref}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      {...rest}
      className={flex({ className, direction })}
    >
      {children}
    </div>
  );
});
Flex.displayName = "Flex";
export default Flex;
