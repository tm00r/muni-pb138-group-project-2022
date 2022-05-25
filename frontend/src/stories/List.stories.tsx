import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from '../components/List';

export default {
  title: 'Example/List',
  component: List,
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