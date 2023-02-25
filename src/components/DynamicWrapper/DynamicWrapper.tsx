import { ReactNode } from 'react';
import dynamic, { DynamicOptions, Loader } from 'next/dynamic';

interface NoSSRProps extends DynamicOptions<{ children: ReactNode }> {
  children: ReactNode;
  loader?: Loader<{ children: ReactNode }> | undefined;
}

const DynamicWrapper = ({ children, ...dynamicOptions }: NoSSRProps) => {
  const DynamicComponent = dynamic(() => import('./Wrapper'), {
    ...dynamicOptions,
  });

  return <DynamicComponent>{children}</DynamicComponent>;
};

export default DynamicWrapper;
