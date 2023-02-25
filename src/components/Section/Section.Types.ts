import React from 'react';

export interface SectionPropsInterface
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className'
  > {
  className?: string;
}
