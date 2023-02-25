import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from './Search';

export default {
  title: 'src/Search',
  component: Search,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
