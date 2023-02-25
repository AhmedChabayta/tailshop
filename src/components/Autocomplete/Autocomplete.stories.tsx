import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Autocomplete from './Autocomplete';

const list = ['ahmed', 'joe', 'moe', 'mazin', 'lama', 'farah'];

export default {
  title: 'src/Autocomplete',
  component: Autocomplete,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  return <Autocomplete {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  options: list,
};
