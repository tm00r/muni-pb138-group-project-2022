import React from "react";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";

import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import "./../styles/mainPage.css";

const headerMiddleTitleState = atom({
    key: 'headerMiddleTitle', // unique ID (with respect to other atoms/selectors)
    default: 'Order Hub', // default value (aka initial value)
  });

export const NewOrder: React.FC = () => {

    const [headerMiddleTitle, setText] = useRecoilState(headerMiddleTitleState);

    return (
        <div>
            <Header templates={true} title={headerMiddleTitle} orders={true} />
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