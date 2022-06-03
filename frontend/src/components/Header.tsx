import React from "react";
import "../styles/header.css";

interface HeaderProps {
  templates: boolean;
  title: string;
  orders: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  templates,
  title,
  orders,
}: HeaderProps) => {

  const templateMode = !templates ? "template--invisible" : "";
  const ordersMode = !orders ? "order--invisible" : "";

  return (
    <header>
      <ul className="header">
        <li className={`header__item template ${templateMode}`}>
          <h2 className="template__title">
            Templates
          </h2>
        </li>
        <li className="header__item main">
          <h1 className="main__title">
            {title}
          </h1>
        </li>
        <li className={`header__item order ${ordersMode}`}>
          <h2 className="order__title">
            Orders
          </h2>
        </li>
      </ul>
    </header>
  );
};
