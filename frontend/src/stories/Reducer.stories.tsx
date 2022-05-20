import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Reducer } from '../components/Reducer';

export default {
  title: 'Design System/Molecules/Reducer',
  component: Reducer,
  argTypes: {
    initialCount: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Reducer>;


const Template: ComponentStory<typeof Reducer> = (args) => <Reducer {...args} />;

export const CountVal = Template.bind({});
CountVal.args = {
  initialCount: 6,
};