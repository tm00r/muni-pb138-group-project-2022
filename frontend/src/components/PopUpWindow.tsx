import React, { useState } from "react";
import { Button } from "./Button";
import { Modal } from "react-bootstrap";
import "../styles/popUpWindow.css";

interface PopUpWindowProps {
  type: "order" | "template";
}

export const PopUpWindow: React.FC<PopUpWindowProps> = ({
  type,
}: PopUpWindowProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        size="wide"
        color="gray"
        label="Launch demo modal"
        eventProp={handleShow}
      />{" "}
      {/* call somewhere upper */}
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
          {type === "order" && (
            <Button
              size="wide"
              color="gray"
              label="Add to orders"
              eventProp={handleClose}
            />
          )}
          {type === "order" && (
            <Button
              size="wide"
              color="gray"
              label="Save as a template"
              eventProp={handleClose}
            />
          )}
          {type === "template" && (
            <Button
              size="wide"
              color="gray"
              label="Save changes"
              eventProp={handleClose}
            />
          )}
          <Button
            size="primary"
            color="orange"
            label="Delete"
            eventProp={handleClose}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};
