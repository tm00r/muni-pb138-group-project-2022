import React, { useState } from "react";
import { List } from "./List";
import { Button } from "./Button";
import { PopUpForm } from "./PopUpForm";

import "../styles/variables.css";
import "../styles/main.css";

export interface MainTabProps {
  contentType: "Items" | "Steps";
  contentId: string;
}

export const MainTab: React.FC<MainTabProps> = (props) => {
  const { contentType, contentId } = props;

  const editable = contentType === "Items" ? true : false;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main__tab">
      <div className="tab__label">
        <span className="">{contentType}</span>
      </div>
      <List editable={editable} endPoint={`steps/${contentId}`}/>
      <div className="tab__button">
        <Button
          size="primary"
          color="gray"
          label={`Add ${contentType}`.slice(0, -1)}
          eventProp={handleShow}
        />
        <PopUpForm type={contentType} show={show} setShow={setShow} />
      </div>
    </div>
  );
};
