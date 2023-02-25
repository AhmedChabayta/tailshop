import React from 'react';
import { SectionPropsInterface } from './Section.Types';
import classnames from 'classnames';

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
