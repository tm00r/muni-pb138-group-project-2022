import React from "react";
import "../styles/main.css";

import { Heading } from "./MainHeading";
import { MainTab } from "./MainTab";

interface FormProps {
    headingTitle: string;
    datetimeText: string;
    type:  "order" | "template";
    contentId: string;
}

export const Main: React.FC<FormProps> = (props) => {

    const { headingTitle, datetimeText, type, contentId } = props

    return (
        <main className="main">
            <Heading
                headingTitle={headingTitle}
                datetimeText={datetimeText}
                type={type}
            />
            <MainTab contentType="Items" contentId={contentId} />
            <MainTab contentType="Steps" contentId={contentId} />
        </main>
    );
};
