import React from "react";
import "../styles/main.css";

import { Heading } from "./MainHeading";
import { MainTab } from "./MainTab";

interface FormProps {
    headingTitle: string;
    datetimeText: string;
    type:  "order" | "template";
}

export const Main: React.FC<FormProps> = (props) => {

    const { headingTitle, datetimeText, type } = props

    return (
        <main className="main">
            <Heading
                headingTitle={headingTitle}
                datetimeText={datetimeText}
                type={type}
            />
            <MainTab contentType="Items"  />
            <MainTab contentType="Steps" />
        </main>
    );
};
