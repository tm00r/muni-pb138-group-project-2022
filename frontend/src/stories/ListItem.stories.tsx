import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from '../components/ListItem';

export default {
  title: 'Design System/Atoms/List Item',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;


const Template: ComponentStory<typeof ListItem> = (args) => < ListItem {...args} />;

export const WithoutReducer = Template.bind({});
WithoutReducer.args = {
  text: 'Shrimp Roll...mmmmmm....',
  withReducer: false,
};