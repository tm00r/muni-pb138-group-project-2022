import React, {useEffect} from "react";
import {Button} from "./Button";
import "../styles/footer.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {domain} from "../types/swrDomain";
import {mutate} from "swr";
import {useRecoilState, useRecoilValue} from "recoil";
import {allItemsListAtom, allStepsListAtom} from "../state/atom";
import uuid4 from "uuid4";

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
            name: uuid4(),
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
