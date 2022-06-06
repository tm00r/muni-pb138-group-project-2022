import React, { useEffect, useState, useLayoutEffect } from "react";
import { List } from "./List";
import { Button } from "./Button";
import { PopUpForm } from "./PopUpForm";

import "../styles/variables.css";
import "../styles/main.css";

export interface MainTabProps {
  contentType: "Items" | "Steps";
  contentId: string;
  finishedOrder: boolean;  // means order can be edited no more
  done?: boolean;
  setDone?: any;
  list: StepsType[] | ItemsType[]
}

export const MainTab: React.FC<MainTabProps> = (props) => {
  const { contentType, contentId, finishedOrder, done, setDone , list} = props;

  const editable = contentType === "Items" ? true : false;
  const step = contentType === "Steps" ? true : false;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main__tab">
      <div className="tab__label">
        <span className="">{contentType}</span>
      </div>
      <List
        isEditable={editable}
        endPoint={`order/${contentType.toLowerCase()}/${contentId}`}
        listType={contentType}
        list={list}
        //step={step} done={done} setDone={setDone}
        />
      {!finishedOrder &&
        <div className="tab__button">
          <Button
            size="primary"
            color="gray"
            label={`Add ${contentType}`.slice(0, -1)}
            eventProp={handleShow}
          />
          <PopUpForm type={contentType} show={show} setShow={setShow} />
        </div>
      }
    </div>
  );
};
