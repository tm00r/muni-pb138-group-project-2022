import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "../components/Header";

export default {
  title: "Design System/Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const NewOrder = Template.bind({});
NewOrder.args = {
  templates: true,
  title: "New Order",
  orders: true,
};

export const Order = Template.bind({});
Order.args = {
  templates: false,
  title: "Order",
  orders: true,
};

export const NewTemplate = Template.bind({});
NewTemplate.args = {
  templates: true,
  title: "New Template",
  orders: false,
};
