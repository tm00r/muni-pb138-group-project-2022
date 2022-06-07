import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Heading } from "../components/MiddleHeading";

export default {
    title: "Design System/Molecules/Form Heading",
    component: Heading,
    argTypes: {
        headingTitle: {
            type: "string",
            control: "Pasta Puttanesca",
        },
        datetimeText: {
            type: "string",
            control: "20.05.2022 15:58",
        }
    }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Pasta = Template.bind({});
Pasta.args = {
    headingTitle: "Pasta Puttanesca",
    datetimeText: "20.05.2022 15:58",
};