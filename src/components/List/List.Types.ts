import React from 'react';
import ListItem from './ListItem';

export interface ListItemPropsInterface
  extends React.DetailsHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
  className?: string;
}
export interface ListType
  extends React.DetailsHTMLAttributes<HTMLUListElement | HTMLOListElement> {
  Item: typeof ListItem;
}
export interface ListPropsInterface
  extends Omit<
    React.DetailsHTMLAttributes<HTMLUListElement | HTMLOListElement>,
    'className'
  > {
  as?: 'ul' | 'ol';
  className?: string;
}
