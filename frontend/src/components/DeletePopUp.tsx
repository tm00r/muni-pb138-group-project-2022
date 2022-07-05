import React from "react";
import {Button} from "./Button";
import {Modal} from "react-bootstrap";
import "../styles/popUpWindow.css";
import {useSetRecoilState} from "recoil";
import {
    isTemplateAtom,
    itemsListAtom,
    orderIdAtom,
    orderNameAtom,
    orderSubmitNameAtom,
    stepsListAtom
} from "../state/atom";
import {domain} from "../static/swrDomain";
import axios from "axios";
import {mutate} from "swr";

interface DeletePopUpProps {
    type: "order" | "template" | "step" | "item";
    show: boolean;
    setShow: any;
    id: string;
}

export const DeletePopUp: React.FC<DeletePopUpProps> = (
    props: DeletePopUpProps
) => {
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setOrderSubmitName = useSetRecoilState(orderSubmitNameAtom)
    const setItemsList = useSetRecoilState(itemsListAtom)
    const setStepsList = useSetRecoilState(stepsListAtom)
    const setOrderId = useSetRecoilState(orderIdAtom)
    const setIsTemplate = useSetRecoilState(isTemplateAtom)

    const {type, show, setShow, id} = props;
    const handleClose = () => setShow(false);
    const handleDelete = async () => {
        if ( type == "order" || type === "template" ) {
            const headers = {
                'Content-Type': 'application/json',
            };
            await axios.delete(domain + `order/${id}`, { headers });
        }
        await mutate(domain + 'order')

        setOrderName("")
        setOrderSubmitName("")
        setItemsList([])
        setStepsList([])
        setOrderId("")
        setIsTemplate(true)

        await handleClose()
    }

    return (
        <>
            <Modal className="popup-window" show={show} onHide={handleClose}>
                <Modal.Header className="popup__heading">
                    <Modal.Title className="popup__heading--text">
                        Do you want to delete this {type}?
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
                <Modal.Footer className="pupup__buttons">
                    <Button
                        size="wide"
                        color="orange"
                        label="Delete"
                        eventProp={handleDelete}
                    />
                    <Button
                        size="primary"
                        color="gray"
                        label="Cancel"
                        eventProp={handleClose}
                    />
                </Modal.Footer>
            </Modal>
            {show && <div className="popup-backdrop"/>}
        </>
    )
}