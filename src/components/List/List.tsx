import React from 'react';
import { ListPropsInterface } from './List.Types';

const List = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  ListPropsInterface
>((props, ref) => {
  const { as = 'ul', className, children, ...rest } = props;
  return React.createElement(as, { ref, className, ...rest }, children);
});

List.displayName = 'List';

export default List;
