import React, { useState } from "react";
import { Button } from "./Button";
import { PopUpWindow } from "./PopUpWindow";

import "../styles/main.css";

interface HeadingProps {
  headingTitle: string;
  datetimeText: string;
  type: "order" | "template";
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { headingTitle, datetimeText, type } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="heading">
        <div className="heading__time">
          <span className="heading__time-text">{datetimeText}</span>
        </div>
        <h3 className="heading__title">{headingTitle}</h3>
        <Button
          size="primary"
          color="orange"
          label="Cancel"
          eventProp={handleShow}
        />
        <PopUpWindow type={type} show={show} setShow={setShow} />
      </div>
    </>
  );
};
