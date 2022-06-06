import React from "react";
import { Button } from "./Button";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {domain} from "../types/swrDomain";
import {mutate} from "swr";

interface FooterProps {
  main_page: boolean;
  main_button: string;
}

export const Footer: React.FC<FooterProps> = ({
  main_button,
  main_page,
}: FooterProps) => {

  const saveOrderAPI = async (isTemplate: Boolean) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const messageData : SubmitOrder = ({
      name: "asdfasfsa",
      steps: [],
      items: [],
      isFinished: false,
      isTemplate: isTemplate,
      createdAt: new Date(),
      orderBy: ""
    });

    await axios.post(domain + 'order', messageData, {headers});
    await mutate(domain + "order")
  }
  return (
    <footer className="footer">
      {main_page === true && (
      <nav className="footer-item footer__main">
            <Button
              size="wide"
              color="dark"
              label={main_button}
              eventProp={() => saveOrderAPI(false)}
            />
      </nav>
      )}

      {!main_page && (
      <nav className="footer-item footer__additional">
      </nav>
      )}
    </footer>
  );
};
