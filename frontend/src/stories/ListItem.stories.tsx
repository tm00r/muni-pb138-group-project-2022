import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from '../components/ListItem';

export default {
  title: 'Example/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;


const Template: ComponentStory<typeof ListItem> = (args) => < ListItem {...args} />;

export const WithReducer = Template.bind({});
WithReducer.args = {
  text: 'That fucking burger again...',
  withReducer: true,
};

export const WithoutReducer = Template.bind({});
WithoutReducer.args = {
  text: 'Shrimp Roll...mmmmmm....',
  withReducer: false,
};