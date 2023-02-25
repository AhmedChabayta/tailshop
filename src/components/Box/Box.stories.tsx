import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';

export default {
  title: 'src/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  const ref = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <Box ref={ref} {...args}>
      {args.children}
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'hello world',
  className: 'text-red-500 bg-black w-52 h-52',
};
