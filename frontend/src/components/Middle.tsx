import React from "react";
import "../styles/middle.css";

import {Heading} from "./MiddleHeading";
import {MainTab} from "./MainTab";
import {useRecoilValue} from "recoil";
import {itemsListAtom, orderIdAtom, stepsListAtom} from "../state/atom";
import useSWR from "swr";
import {domain} from "../types/swrDomain";
import {fetcher} from "../state/fetcher";

interface FormProps {
    datetimeText: string;
    type: "order" | "template" | "finishedOrder";
    done?: boolean;
    setDone?: any;
}

export const Main: React.FC<FormProps> = (props) => {

    const { datetimeText, type, done , setDone} = props

    const orderId = useRecoilValue(orderIdAtom)
    const itemsList = useRecoilValue(itemsListAtom)
    const stepsList = useRecoilValue(stepsListAtom)

    const { data: orderData, error: orderError } = useSWR(domain + "order/" + orderId, fetcher);

    if (orderError) return (<p>E</p>)
    if (!orderData) return (<p>Loading...</p>)

    const isOrder = orderData.data.isTemplate

    return (
        <main className="main">
            {orderId &&
                <>
                    <Heading
                        datetimeText={datetimeText}
                        type={type}
                    />
                    <MainTab contentType="Items" isOrder={isOrder} list={itemsList} />
                    <MainTab contentType="Steps" isOrder={isOrder} done={done} list={stepsList} setDone={setDone}/>
                </>
            }
        </main>
    );
};
