import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "../pages/Layout";

export default {
  title: "Pages/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Welcome = Template.bind({});
Welcome.args = {

};
