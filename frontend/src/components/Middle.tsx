import React from "react";
import "../styles/main.css";

import {Heading} from "./MainHeading";
import {MainTab} from "./MainTab";
import {useRecoilValue} from "recoil";
import {itemsListAtom, orderIdAtom, stepsListAtom} from "../state/atom";

interface FormProps {
    headingTitle: string;
    datetimeText: string;
    type: "order" | "template" | "finishedOrder";
    contentId: string;
    done?: boolean;
    setDone?: any;
}

export const Main: React.FC<FormProps> = (props) => {

    const {headingTitle, datetimeText, type, done , setDone} = props
    const orderId = useRecoilValue(orderIdAtom)
    const itemsList = useRecoilValue(itemsListAtom)
    const stepsList = useRecoilValue(stepsListAtom)

    const finished = type === "finishedOrder" ? true : false

    return (
        <main className="main">
            {orderId &&
                <>
                    <Heading
                        headingTitle={headingTitle}
                        datetimeText={datetimeText}
                        type={type}
                    />
                    <MainTab contentType="Items" contentId={orderId} finishedOrder={finished} list={itemsList} />
                    <MainTab contentType="Steps" contentId={orderId} finishedOrder={finished} done={done} list={stepsList} setDone={setDone}/>
                </>
            }
        </main>
    );
};
