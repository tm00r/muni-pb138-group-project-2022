import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from '../components/ListItem';

export default {
  title: 'Example/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;


const Template: ComponentStory<typeof ListItem> = (args) => < ListItem {...args} />;

export const MainItem = Template.bind({});
MainItem.args = {
  crop: 'none',
  text: 'That fucking burger again...'
};

export const LeftItem = Template.bind({});
LeftItem.args = {
  crop: 'left',
  text: 'Shrimp Roll...mmmmmm....'
};

export const RightItem = Template.bind({});
RightItem.args = {
  crop: 'right',
  text:'Shytty cheese...'
};