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
  return (
    <ul className="header">
      <li
        className={`header-item header-template ${
          !templates ? "header-template--invisible" : ""
        }`}
      >
        Templates
      </li>
      <li className="header-item header-main-title">{title}</li>
      <li
        className={`header-item header-order ${
          !orders ? "header-order--invisible" : ""
        }`}
      >
        Orders
      </li>
    </ul>
  );
};
