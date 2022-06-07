import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItemOld } from '../trash/ListItem-old';

export default {
  title: 'Design System/Atoms/List Item',
  component: ListItemOld,
} as ComponentMeta<typeof ListItemOld>;


const Template: ComponentStory<typeof ListItemOld> = (args) => < ListItemOld {...args} />;

export const WithoutReducer = Template.bind({});
WithoutReducer.args = {
  text: 'Shrimp Roll...mmmmmm....',
  withReducer: false,
};