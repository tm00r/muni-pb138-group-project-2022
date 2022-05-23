import React from "react";
import { Button } from "./Button";
import "../styles/popUpWindow.css";

interface PopUpWindowProps {
  type: "order" | "template";
}

export const PopUpWindow: React.FC<PopUpWindowProps> = ( {type}: PopUpWindowProps) => {

  const templateMode = type === "order" ? "template--invisible" : "";
  const orderMode = type === "template" ? "order--invisible" : "";

  function handleCancel(e: any) {
    e.preventDefault();
}
  
  return (
    <div className="popup-window">
      <div className="popup__heading">
        <span className="popup__heading--text">Do you want to save this {type}?</span>
        <button className="cross-button" type="submit" onClick={handleCancel}>&#x2715;</button>
      </div>
      <span className="popup__subheading">
        Your changes will be lost
      </span>
      <div className="pupup__buttons">
        <a className={`pupup__button ${orderMode}`}><Button size="wide" color="gray" label="Add to orders" /></a>
        <a className={`pupup__button ${orderMode}`}><Button size="wide" color="gray" label="Save as a template" /></a>
        <a className={`pupup__button ${templateMode}`}><Button size="wide" color="gray" label="Save changes" /></a>
        <a className="pupup__button"><Button size="primary" color="orange" label="Delete" /></a>
      </div>
  </div>
  );
};