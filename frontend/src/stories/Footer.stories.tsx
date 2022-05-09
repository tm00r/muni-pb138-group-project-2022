import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from "../components/Footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const NewOrder = Template.bind({});
NewOrder.args = {
  main_page: false,
  main_button: "Add new order",
};

export const Order = Template.bind({});
Order.args = {
  main_page: false,
  main_button: "Submit",
};

export const NewTemplate = Template.bind({});
NewTemplate.args = {
  main_page: false,
  main_button: "Add new template",
};

export const CreateNewTemplate = Template.bind({});
CreateNewTemplate.args = {
  main_page: true,
  main_button: "Create template",
};
