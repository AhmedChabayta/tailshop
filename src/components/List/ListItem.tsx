import React from 'react';
import { ListItemPropsInterface } from './List.Types';

const ListItem = React.forwardRef<HTMLLIElement, ListItemPropsInterface>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <li ref={ref} className={className} {...rest}>
        {children}
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
export default ListItem;
