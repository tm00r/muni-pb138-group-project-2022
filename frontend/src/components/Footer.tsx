import React from "react";
import axios from "axios";
import { mutate } from "swr";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { domain } from "../types/swrDomain";
import { allItemsListAtom, allStepsListAtom, isTemplateAtom, orderNameAtom, orderSubmitNameAtom } from "../state/atom";

import { Button } from "./Button";

import "../styles/footer.css";

interface FooterProps {
    main_button: string;
}

export const Footer: React.FC<FooterProps> = ({
    main_button,
    // type,
}: FooterProps) => {

    const allItems = useRecoilValue(allItemsListAtom)
    const allSteps = useRecoilValue(allStepsListAtom)
    const orderSubmitName = useRecoilValue(orderSubmitNameAtom)
    const orderName = useRecoilValue(orderNameAtom)
    const isTemp = useRecoilValue(isTemplateAtom)

    const setOrderSubmitName = useSetRecoilState(orderSubmitNameAtom)

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
            name: orderSubmitName ? orderSubmitName : orderName,
            steps: allStepsSubmit,
            items: allItemsSubmit,
            isFinished: false,
            isTemplate: isTemplate,
            createdAt: new Date(),
            orderBy: ""
        });

        await axios.post(domain + 'order', messageData, { headers })
        await mutate(domain + "order")
        await setOrderSubmitName("")
    }
    return (
        <footer className="footer">
            <div className="footer__button">
                <Button
                    size="wide"
                    color="gray"
                    label="Save template"
                    eventProp={() => saveOrderAPI(true)}
                />
            </div>
            {isTemp &&
                <div className="footer__button">
                    <Button
                        size="wide"
                        color="dark"
                        label={main_button}
                        eventProp={() => saveOrderAPI(false)}
                    />
                </div>
            }
        </footer>
    );
};
