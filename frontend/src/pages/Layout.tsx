import React from "react";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./../styles/mainPage.css";
import { Link } from "react-router-dom";
import { List } from "../components/List";

export const Layout: React.FC = () => {

    return (
        <div>
            <Header templates={true} title="Order Hub" orders={true} />
            <main className="main-page__body">
                <aside className="main-page__aside">
                    <List editable={false} cropPosition="left"/>
                </aside>
                <Main headingTitle="Heading Title" datetimeText="Date Time" type="order" />
                <aside className="main-page__aside">
                    <List editable={false} cropPosition="right"/>
                </aside>
            </main>
            <Footer main_page={true} main_button="Add order" />
        </div>
    );

};