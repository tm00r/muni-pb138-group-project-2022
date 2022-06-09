import React, {useEffect, useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";

import {
    isTemplateAtom,
    itemsListAtom,
    orderIdAtom,
    orderNameAtom,
    orderSubmitNameAtom,
    stepsListAtom
} from "../state/atom";

import {Button} from "./Button";
import {PopUpWindow} from "./PopUpWindow";

import "../styles/middle.css";
import {defaultOrderTemplateId} from "../trash/defaultOrderTemplate";

interface HeadingProps {
    datetimeText: string;
    type: "order" | "template" | "finishedOrder";
}

export const Heading: React.FC<HeadingProps> = (props) => {
    const {datetimeText, type} = props;

    const orderRecoilName = useRecoilValue(orderNameAtom);
    const setSubmitOrderName = useSetRecoilState(orderSubmitNameAtom)

    const headinRef = React.useRef(null);

    useEffect(() => {
        const input = headinRef.current;
        input.value = input.defaultValue;
    }, [orderRecoilName])

    const [show, setShow] = useState(false);
    const isTemplate = useRecoilValue(isTemplateAtom)
    const orderId = useRecoilValue(orderIdAtom)


    const orderSubmitName = useRecoilValue(orderSubmitNameAtom)
    const orderName = useRecoilValue(orderNameAtom)
    const itemsList = useRecoilValue(itemsListAtom)
    const stepsList = useRecoilValue(stepsListAtom)

    const setOrderId = useSetRecoilState(orderIdAtom)
    const setOrderSubmitName = useSetRecoilState(orderSubmitNameAtom)
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setItemsList = useSetRecoilState(itemsListAtom)
    const setStepsList = useSetRecoilState(stepsListAtom)
    const setIsTemplate = useSetRecoilState(isTemplateAtom)

    const handleShow = async () => {
        if ((isTemplate) &&
        (orderSubmitName != "" || itemsList.length != 0 || stepsList.length != 0))
        {
            setShow(true);
        }
    else
        {
            await setOrderId('')
            await setOrderSubmitName("")
            await setOrderName("")
            await setItemsList([])
            await setStepsList([])
            await setIsTemplate(true)
        }
    }

    return (
        <>
            <div className="heading">
                <div className="heading__time">
                    <span className="heading__time-text">{datetimeText}</span>
                </div>
                <input
                    className="heading__title"
                    type="text"
                    maxLength={25}
                    placeholder="New order name"
                    defaultValue={orderRecoilName as string}
                    ref={headinRef}
                    readOnly={!isTemplate}
                    onChange={(e) => setSubmitOrderName(e.target.value)}
                />
                <Button
                    size="primary"
                    color="orange"
                    label="Cancel"
                    eventProp={handleShow}
                />
                {type !== "finishedOrder" &&
                    <PopUpWindow type={type} show={show} setShow={setShow}/>
                }
            </div>
        </>
    );
};
