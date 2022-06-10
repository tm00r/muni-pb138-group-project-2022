import React from "react";
import {useRecoilValue} from "recoil";
import {isTemplateAtom, orderIdAtom} from "../state/atom";
import "../styles/header.css";
import {defaultOrderTemplateId} from "../trash/defaultOrderTemplate";
import sharedWorkerConstructor from "*?sharedworker";

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

    const isTemplate = useRecoilValue(isTemplateAtom)
    const orderId = useRecoilValue(orderIdAtom)

    const headerName = () => {
        if (orderId) {
            if (orderId == defaultOrderTemplateId) {
                return "New Template"
            } else if (isTemplate) {
                return "New Order"
            } else {
                return "Order"
            }
        }
        return "Order Hub"
    }

    return (
        <header className="header">
            <ul className="header-list">
                <li className={`header-list__item template`}>
                    <h2 className="template__title">
                        Templates
                    </h2>
                </li>
                <li className="header-list__item middle">
                    <h1 className="main__title">
                        {headerName()}
                    </h1>
                </li>
                <li className={`header-list__item order`}>
                    <h2 className="order__title">
                        Orders
                    </h2>
                </li>
            </ul>
        </header>
    );
};
