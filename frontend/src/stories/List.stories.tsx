import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from '../components/List';

export default {
  title: 'Design System/Molecules/List',
  component: List,
  argTypes: {
    cropPosition: {
      control: {  type: 'select', options: ['left', 'right'] },
    },
  }
} as ComponentMeta<typeof List>;


const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const MainList = Template.bind({});
MainList.args = {

};

export const LeftList = Template.bind({});
LeftList.args = {
  cropPosition: 'left',
};

export const RightList = Template.bind({});
RightList.args = {
  cropPosition: 'right',
};