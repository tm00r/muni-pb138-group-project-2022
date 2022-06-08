import React, {useState} from "react";
import {Button} from "./Button";
import {Modal} from "react-bootstrap";
import "../styles/popUpWindow.css";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    allItemsListAtom,
    allStepsListAtom,
    isTemplateAtom,
    orderIdAtom,
    orderNameAtom,
    orderSubmitNameAtom
} from "../state/atom";
import axios from "axios";
import {domain} from "../types/swrDomain";
import {mutate} from "swr";

interface PopUpWindowProps {
    type: "order" | "template";
    show: boolean;
    setShow: any;
}

export const PopUpWindow: React.FC<PopUpWindowProps> = (
    props: PopUpWindowProps
) => {
    const {type, show, setShow} = props;
    const handleClose = () => setShow(false);

    const allItems = useRecoilValue(allItemsListAtom)
    const allSteps = useRecoilValue(allStepsListAtom)
    const orderSubmitName = useRecoilValue(orderSubmitNameAtom)
    const orderName = useRecoilValue(orderNameAtom)
    const orderId = useRecoilValue(orderIdAtom)
    const isTemplate = useRecoilValue(isTemplateAtom)
    const setOrderId = useSetRecoilState(orderIdAtom)

    const setOrderSubmitName = useSetRecoilState(orderSubmitNameAtom)
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setIsTemplate = useSetRecoilState(isTemplateAtom)

    const saveOrderAPI = async (isTemplate: Boolean) => {
        const allItemsSubmit: SubmitItem[] = allItems.map(x => ({
            name: x.name,
            count: x.count
        }))
        const allStepsSubmit: SubmitStep[] = allSteps.map(x => ({
            name: x.name,
            deadline: new Date(x.deadline),
            orderSequenceNumber: x.orderSequenceNumber,
            description: x.description,
            isFinished: false
        }))

        const headers = {
            'Content-Type': 'application/json',
        };
        const messageData: SubmitOrder = ({
            name: orderSubmitName ? orderSubmitName : orderName,
            steps: allStepsSubmit,
            items: allItemsSubmit,
            isFinished: false,
            isTemplate: isTemplate,
            createdAt: new Date(),
            orderBy: ""
        });

        await axios.post(domain + 'order', messageData, {headers})
        await mutate(domain + "order")
        await setOrderSubmitName("")
        await setOrderName("")
        await setOrderId("")
        await handleClose()
    }

    const cancelTemplate = async () =>{
        await setOrderId('')
        await setOrderSubmitName("")
        await setOrderName("")
        await handleClose()
    }

    const changeOrderId = useSetRecoilState(orderIdAtom)
    const handleDelete = async () => {
        if (type == "order" || type === "template") {
            const headers = {
                'Content-Type': 'application/json',
            };
            await axios.delete(domain + `order/${orderId}`, {headers});
        }
        setIsTemplate(false)
        await mutate(domain + 'order')
        await changeOrderId(x => "")
        await handleClose()
    }

    return (
        <>
            <Modal className="popup-window" show={show} onHide={handleClose}>
                <Modal.Header className="popup__heading">
                    <Modal.Title className="popup__heading--text">
                        Do you want to save this {type}?
                    </Modal.Title>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleClose}
                    >
                        &#x2715;
                    </button>
                </Modal.Header>
                <Modal.Body className="popup__subheading">
                    Your changes will be lost
                </Modal.Body>
                <Modal.Footer className="pupup__buttons">
                    {!isTemplate &&(
                        <>
                            <Button
                                size="wide"
                                color="gray"
                                label="Add to orders"
                                eventProp={() => saveOrderAPI(false)}
                            />
                            <Button
                                size="wide"
                                color="gray"
                                label="Save as a template"
                                eventProp={() => saveOrderAPI(true)}
                            />
                        </>)
                    }
                    {isTemplate && (
                        <Button
                            size="wide"
                            color="gray"
                            label="Save changes"
                            eventProp={() => saveOrderAPI(true)}
                        />
                    )}
                    <Button
                        size="primary"
                        color="orange"
                        label="Cancel"
                        eventProp={() => cancelTemplate()}
                    />
                </Modal.Footer>
            </Modal>
            {show && <div className="popup-backdrop"/>}
        </>
    );
};
