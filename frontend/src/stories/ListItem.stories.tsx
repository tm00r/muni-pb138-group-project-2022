import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from './ListItem';

export default {
  title: 'Example/ListItem',
  component: ListItem,

} as ComponentMeta<typeof ListItem>;


const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Main = Template.bind({});
Main.args = {
  crop: 'none',
  text: 'That fucking burger again...',
};

export const Left = Template.bind({});
Left.args = {
  crop: 'left',
  text: 'That fucking burger again...',
};

export const Right = Template.bind({});
Right.args = {
  crop: 'right',
  text: 'That fucking burger again...',
};