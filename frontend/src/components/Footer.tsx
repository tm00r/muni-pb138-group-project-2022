import React from "react";
import axios from "axios";
import {mutate} from "swr";
import {useRecoilValue} from "recoil";

import {domain} from "../types/swrDomain";
import {allItemsListAtom, allStepsListAtom, orderNameAtom, orderSubmitNameAtom} from "../state/atom";

import {Button} from "./Button";

import "../styles/footer.css";

interface FooterProps {
    main_page: boolean;
    main_button: string;
}

export const Footer: React.FC<FooterProps> = ({
                                                  main_button,
                                                  main_page,
                                              }: FooterProps) => {

    const allItems = useRecoilValue(allItemsListAtom)
    const allSteps = useRecoilValue(allStepsListAtom)
    const orderName = useRecoilValue(orderSubmitNameAtom)

    const saveOrderAPI = async (isTemplate: Boolean) => {
        const allItemsSubmit: SubmitItem[] = allItems.map(x => ({
            name: x.name,
            count: x.count
        }))
        const allStepsSubmit: SubmitStep[] = allSteps.map(x => ({
            name: x.name,
            deadline: new Date(x.deadline),
            orderSequenceNumber: x.orderSequenceNumber,
            description: x.description,
            isFinished: false
        }))

        const headers = {
            'Content-Type': 'application/json',
        };
        const messageData: SubmitOrder = ({
            name: orderName,
            steps: allStepsSubmit,
            items: allItemsSubmit,
            isFinished: false,
            isTemplate: isTemplate,
            createdAt: new Date(),
            orderBy: ""
        });

        console.log(messageData)
        await axios.post(domain + 'order', messageData, {headers})
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
