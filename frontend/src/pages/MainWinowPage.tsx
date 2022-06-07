import React from "react";
import { Main } from "../components/Middle";
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

export const MainWinowPage: React.FC = () => {

    const [headerMiddleTitle, setText] = useRecoilState(headerMiddleTitleState);

    return (
        <>
            <Header templates={true} title={headerMiddleTitle} orders={true} />
            <main className="main-page_body">
                <aside className="main-page__aside templates">
                    <List listType="Templates" isEditable={false} endPoint="order" list={[]} />
                </aside>
                <Main datetimeText="Date Time" type="order" />
                <aside className="main-page__aside orders">
                    <List listType="Orders" isEditable={false} endPoint="order" list={[]} />
                </aside>
            </main>
            <Footer main_page={true} main_button="Add order" />
        </>
    );

};