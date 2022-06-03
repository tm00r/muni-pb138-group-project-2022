import React from "react";
import { Button } from "./Button";
import "../styles/footer.css";
import { Link } from "react-router-dom";

interface FooterProps {
  main_page: boolean;
  main_button: string;
}

export const Footer: React.FC<FooterProps> = ({
  main_button,
  main_page,
}: FooterProps) => {
  return (
    <div className="footer">
      <nav className="footer-item footer__main">
        {main_page === true && (

          <Link to="/create-order">
            <Button
              size="wide"
              color="dark"
              label={main_button}
            />
          </Link>
        )}
      </nav>
    
      <nav className="footer-item footer__additional">
        {main_page === false && (


        <Link to="/create-order">
          
          <Button
            size="middle"
            color="dark"
            label={main_button}
          />
      </Link>
        )}
      </nav>
    </div>
  );
};
