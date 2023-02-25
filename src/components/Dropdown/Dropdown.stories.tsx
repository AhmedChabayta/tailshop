import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import { useRouter as useRouterBase } from 'next/router';
import { withNextRouter } from 'storybook-addon-next-router';

export default {
  title: 'src/dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const useRouter = () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  });

  const router = useRouter();
  return <Template {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
