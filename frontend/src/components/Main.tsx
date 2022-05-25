import React from "react";
import "../styles/main.css";

import { Heading } from "./MainHeading";
import { MainTab } from "./MainTab";

interface FormProps {
    headingTitle: string;
    datetimeText: string;
}

export const Main: React.FC<FormProps> = (props) => {

    const { headingTitle, datetimeText } = props

    return (
        <main className="main">
            <Heading
                headingTitle={headingTitle}
                datetimeText={datetimeText}
            />
            <MainTab contentType="Items"  />
            <MainTab contentType="Steps" />
        </main>
    );
};
