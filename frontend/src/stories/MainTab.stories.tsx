import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainTab } from '../components/MainTab';

export default {
  title: 'Design System/Molecules/Main Tab',
  component: MainTab,
  argTypes: {
    contentType: {
      control: {
        type: 'select',
        options: ['Items', 'Steps'],
      },
    },
  }
} as ComponentMeta<typeof MainTab>;


const Template: ComponentStory<typeof MainTab> = (args) => <MainTab {...args} />;

export const Items = Template.bind({});
Items.args = {
  contentType: 'Items',
};

export const Steps = Template.bind({});
Steps.args = {
  contentType: 'Steps',
};
