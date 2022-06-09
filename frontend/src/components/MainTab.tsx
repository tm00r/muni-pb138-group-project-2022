import React, {useState} from "react";
import {List} from "./List";
import {Button} from "./Button";
import {PopUpForm} from "./PopUpForm";

import "../styles/variables.css";
import "../styles/middle.css";
import { useRecoilValue } from "recoil";
import {isTemplateAtom, orderIdAtom} from "../state/atom";

export interface MainTabProps {
    contentType: "Items" | "Steps";
    done?: boolean;
    setDone?: any;
    list: StepsType[] | ItemsType[]
}

export const MainTab: React.FC<MainTabProps> = (props) => {
    const {
        contentType,
        // done, setDone ,
        list
    } = props;
    const editable = contentType === "Items" ? true : false;
    const step = contentType === "Steps" ? true : false;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const orderId = useRecoilValue(orderIdAtom)
    const isTemplate = useRecoilValue(isTemplateAtom)

    return (
        <div className="main__tab">
            <div className="tab__label">
                <span className="">{contentType}</span>
            </div>
            <List
                isEditable={editable}
                endPoint={`order/${contentType.toLowerCase()}`}
                listType={contentType}
                list={list}
                //step={step} done={done} setDone={setDone}
            />
            {(orderId && isTemplate) &&
                <div className="tab__button">
                    <Button
                        size="primary"
                        color="gray"
                        label={`Add ${contentType}`.slice(0, -1)}
                        eventProp={handleShow}
                    />
                    <PopUpForm type={contentType} show={show} setShow={setShow}/>
                </div>
            }
        </div>
    );
};
