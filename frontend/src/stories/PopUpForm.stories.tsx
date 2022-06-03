import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PopUpForm } from "../components/PopUpForm";

export default {
  title: "Example/PopUpForm",
  component: PopUpForm,
} as ComponentMeta<typeof PopUpForm>;

const Template: ComponentStory<typeof PopUpForm> = (args) => <PopUpForm {...args} />;

export const PopUpOrder = Template.bind({});
PopUpOrder.args = {
  type: "item"
};

export const PopUpTemplate = Template.bind({});
PopUpTemplate.args = {
  type: "step"
};