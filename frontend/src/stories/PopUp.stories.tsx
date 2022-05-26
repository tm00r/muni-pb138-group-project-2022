import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PopUpWindow } from "../components/PopUpWindow";

export default {
  title: "Example/PopUpWindow",
  component: PopUpWindow,
} as ComponentMeta<typeof PopUpWindow>;

const Template: ComponentStory<typeof PopUpWindow> = (args) => <PopUpWindow {...args} />;

export const PopUpOrder = Template.bind({});
PopUpOrder.args = {
  type: "order"
};

export const PopUpTemplate = Template.bind({});
PopUpTemplate.args = {
  type: "template"
};