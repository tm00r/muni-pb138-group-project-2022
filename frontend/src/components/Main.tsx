import React from "react";
import "../styles/main.css";

import { Heading } from "./MainHeading";
import { MainTab } from "./MainTab";

interface FormProps {
    headingTitle: string;
    datetimeText: string;
    type: "order" | "template" | "finishedOrder";
    contentId: string;
    done?: boolean;
    setDone?: any;
}

export const Main: React.FC<FormProps> = (props) => {

    const { headingTitle, datetimeText, type, contentId, done, setDone } = props

    const finished = type === "finishedOrder" ? true : false

    return (
        <main className="main">
            <Heading
                headingTitle={headingTitle}
                datetimeText={datetimeText}
                type={type}
            />
            <MainTab contentType="Items" contentId={contentId} finishedOrder={finished}/>
            <MainTab contentType="Steps" contentId={contentId} finishedOrder={finished} done={done} setDone={setDone}/>
        </main>
    );
};
