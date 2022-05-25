import React from "react";
import { Button } from "./Button";

import "../styles/main.css";

interface HeadingProps {
    headingTitle: string;
    datetimeText: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {

    const { headingTitle, datetimeText } = props;

    return (
        <>
            <div className="heading">
                <div className="heading__time">
                    <span className="heading__time-text">{datetimeText}</span>
                </div>
                <h3 className="heading__title">
                    {headingTitle}
                </h3>
                <Button
                    size="primary"
                    color="orange"
                    label="Cancel"
                    eventProp={() => {}}
                />
            </div>
        </>
    );
};
