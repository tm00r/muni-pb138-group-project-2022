import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { orderNameAtom, orderSubmitNameAtom } from "../state/atom";

import { Button } from "./Button";
import { PopUpWindow } from "./PopUpWindow";

import "../styles/middle.css";

interface HeadingProps {
  datetimeText: string;
  type: "order" | "template" | "finishedOrder";
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { datetimeText, type } = props;

  const orderRecoilName = useRecoilValue(orderNameAtom);
  const setSubmitOrderName = useSetRecoilState(orderSubmitNameAtom)
  const [orderName, setOrderName] = useState("");

  const headinRef = React.useRef(null);

  useEffect(() => {
    setOrderName(orderRecoilName as string)
    const input = headinRef.current;
    input.value = input.defaultValue;
  }, [orderRecoilName])

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="heading">
        <div className="heading__time">
          <span className="heading__time-text">{datetimeText}</span>
        </div>
        <input
          className="heading__title"
          type="text"
          placeholder="New order name"
          defaultValue={orderName as string}
          ref = {headinRef}
          onChange = {(e) => setSubmitOrderName(e.target.value)}
        />
        <Button
          size="primary"
          color="orange"
          label="Cancel"
          eventProp={handleShow}
        />
        {type !== "finishedOrder" &&
          <PopUpWindow type={type} show={show} setShow={setShow} />
        }
      </div>
    </>
  );
};
