import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from './ListItem';

export default {
  title: 'Example/ListItem',
  component: ListItem,

  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof ListItem>;


const Template: ComponentStory<typeof ListItem> = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  type: 'main',
  label: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
  label: 'Button',
};

export const Orange = Template.bind({});
Orange.args = {
  type: 'orange',
  label: 'Button',
};

export const Wide = Template.bind({});
Wide.args = {
  size: 'wide',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: '+',
};
