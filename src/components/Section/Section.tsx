import React from 'react';
import classnames from 'classnames';
import { SectionPropsInterface } from './Section.Types';

const Section = React.forwardRef<HTMLElement, SectionPropsInterface>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <section ref={ref} className={classnames(className, 'w-full')} {...rest}>
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
export default Section;
