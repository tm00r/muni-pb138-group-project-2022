import React from "react";
import { List } from "./List";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./../styles/mainPage.css";
import { Link } from "react-router-dom";

export const MainPage = () => {


  return (
    <div>
      <header className="main-page__header">
        <Header templates={true} title="Order Hub" orders={true} />
      </header>
      <main className="main-page__body">
        <div className="main-page__list"><List editable={false} /></div>
        <div className="main-page__list"><List editable={false}/></div>
        <Link to="order/2">
          detail objednavky
        </Link>
      </main>
      <footer className="main-page__footer">
        <Footer main_page={true} main_button="Add template" />
      </footer>
    </div>
  );
};
