import React from "react";
import "../styles/middle.css";

import {Heading} from "./MiddleHeading";
import {MainTab} from "./MainTab";
import {useRecoilValue} from "recoil";
import {itemsListAtom, orderIdAtom, stepsListAtom} from "../state/atom";

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

    const finished = type === "finishedOrder" ? true : false

    return (
        <main className="main">
            {orderId &&
                <>
                    <Heading
                        datetimeText={datetimeText}
                        type={type}
                    />
                    <MainTab contentType="Items"  finishedOrder={finished} list={itemsList} />
                    <MainTab contentType="Steps"  finishedOrder={finished} done={done} list={stepsList} setDone={setDone}/>
                </>
            }
        </main>
    );
};
