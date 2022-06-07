import React from "react";
import { Button } from "./Button";
import { Modal } from "react-bootstrap";
import "../styles/popUpWindow.css";
import {useSetRecoilState} from "recoil";
import {orderIdAtom} from "../state/atom";

interface DeletePopUpProps {
  type: "order" | "template" | "step" | "item";
  show: boolean;
  setShow: any;
}

export const DeletePopUp: React.FC<DeletePopUpProps> = (
  props: DeletePopUpProps
) => {
  const { type, show, setShow } = props;
  const handleClose = () => setShow(false);

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
            eventProp={handleClose}
          />
          <Button
            size="primary"
            color="gray"
            label="Cancel"
            eventProp={handleClose}
          />
        </Modal.Footer>
      </Modal>
      {show && <div className="popup-backdrop" />}
    </>
  )
}