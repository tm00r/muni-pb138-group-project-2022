import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  type: 'main',
  label: 'That fucking burger again...',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
  label: 'That fucking burger again...',
};

export const Orange = Template.bind({});
Orange.args = {
  type: 'orange',
  label: 'That fucking burger again...',
};

export const Wide = Template.bind({});
Wide.args = {
  size: 'wide',
  label: 'That fucking burger again...',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: '+',
};
