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
            <aside>
                <List editable={false} />
            </aside>
            <Main headingTitle="Heading Title" datetimeText="Date Time" type="order" />
            <aside>
                <List editable={false} />
            </aside>
            <Footer main_page={true} main_button="Add order" />
        </div>
    );

};