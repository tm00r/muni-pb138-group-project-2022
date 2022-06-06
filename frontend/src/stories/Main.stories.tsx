import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Main } from "../components/Middle";

export default {
  title: "Design System/Organisms/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const NewOrder = Template.bind({});
NewOrder.args = {
  headingTitle: "New Order",
  datetimeText: "20.05.2022 15:58",
  type: "order",
};

export const NewTemplate = Template.bind({});
NewTemplate.args = {
  headingTitle: "New Template",
  datetimeText: "20.05.2022 15:58",
  type: "template",
};

export const Order = Template.bind({});
Order.args = {
  headingTitle: "Order 123",
  datetimeText: "20.05.2022 15:58",
  type: "order",
};