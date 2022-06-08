import React from "react";
import axios from "axios";
import { mutate } from "swr";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { domain } from "../types/swrDomain";
import { allItemsListAtom, allStepsListAtom, globalStateAtom, isTemplateAtom, orderIdAtom, orderNameAtom, orderSubmitNameAtom } from "../state/atom";

import { Button } from "./Button";

import "../styles/footer.css";
import {defaultOrderTemplateId} from "../trash/defaultOrderTemplate";


export const Footer: React.FC = () => {
    const allItems = useRecoilValue(allItemsListAtom)
    const allSteps = useRecoilValue(allStepsListAtom)
    const orderSubmitName = useRecoilValue(orderSubmitNameAtom)
    const orderName = useRecoilValue(orderNameAtom)
    const isTemplate = useRecoilValue(isTemplateAtom)
    const orderId = useRecoilValue(orderIdAtom)
    const setOrderId = useSetRecoilState(orderIdAtom)

    const setOrderSubmitName = useSetRecoilState(orderSubmitNameAtom)
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setGlobalState = useSetRecoilState(globalStateAtom)

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
        await setOrderName("")
        await setOrderId("")
    }

    const handleButtonClick = async (isTemplate: boolean) => {
        if (orderId) {
            await saveOrderAPI(isTemplate)
        }
        else {
            await setOrderId(defaultOrderTemplateId)
            await mutate(domain + "order")
        }
        setGlobalState("New Order")
    }

    return (
        <footer className="footer">
            <div className="footer__button">
                <Button
                    size="wide"
                    color="gray"
                    label={!orderId ? "Create new template" : "Save template"}
                    eventProp={() => handleButtonClick(true)}
                />
            </div>
            {isTemplate &&
                <div className="footer__button">
                    <Button
                        size="wide"
                        color="dark"
                        label="Add to orders"
                        eventProp={() => handleButtonClick(false)}
                    />
                </div>
            }
        </footer>
    );
};
