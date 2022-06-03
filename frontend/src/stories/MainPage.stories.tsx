import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { MainPage } from "../components/MainPage";

export default {
  title: "Design System/Organisms/MainPage",
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const Main_Page = Template.bind({});
Main_Page.args = {}
