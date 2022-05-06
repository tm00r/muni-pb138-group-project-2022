import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: {  type: 'select', options: ['gray', 'dark', 'orange'] },
    },
    size: {
      control: { type: 'select', options: ['primary', 'small', 'wide'] },
    },
    label: {
      control: { type: 'text' },
    },
  },

} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
  label: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
  label: 'Button',
};

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
  label: 'Button',
};

export const Wide = Template.bind({});
Wide.args = {
  color: 'gray',
  size: 'wide',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  color: 'gray',
  size: 'small',
  label: '+',
};
