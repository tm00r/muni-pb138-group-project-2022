import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,

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
  size: 'wide',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: '+',
};
