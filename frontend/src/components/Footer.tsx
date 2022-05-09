import React from "react";
import { Button } from "./Button";
import "../styles/footer.css";

interface FooterProps {
  main_page: boolean;
  main_button: string;
}

export const Footer: React.FC<FooterProps> = ({
  main_button,
  main_page,
}: FooterProps) => {
  return (
    <ul className="footer">
      <li
        className={`footer-item ${
          !main_page ? "footer-middle-button" : "footer-left-button"
        }`}
      >
        <Button size="middle" color="dark" label={main_button} />
      </li>
      <li className="footer-item footer-theme-button">
        {" "}
        <Button size="middle" color="gray" label="Dark Theme" />{" "}
      </li>
    </ul>
  );
};
