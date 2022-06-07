import React, { useState } from 'react';
import { domain } from "../types/swrDomain";
import { mutate } from "swr";
import { useSetRecoilState } from "recoil";

import { Button } from './Button';
import { Reducer } from './Reducer';
import { DeletePopUp } from './DeletePopUp';

import { itemsListAtom, orderIdAtom, orderNameAtom, stepsListAtom } from "../state/atom";

import '../styles/listitem.css';
import '../styles/variables.css';
import { DeletePopUp } from './DeletePopUp';
import { domain } from "../types/swrDomain";
import { mutate } from "swr";
import { useSetRecoilState } from "recoil";
import { itemsListAtom, orderIdAtom, orderNameAtom, stepsListAtom } from "../state/atom";

interface ListItemProps {
    listProps: GeneralListItemType;
    listType: "Items" | "Steps" | "Orders" | "Templates";
}

// @ts-ignore
export const ListItem: React.FC<ListItemProps> = (props) => {
    const setOrderId = useSetRecoilState(orderIdAtom)
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setStepsList = useSetRecoilState(stepsListAtom)
    const setItemsList = useSetRecoilState(itemsListAtom)
    const onOrderCLick = async (id: String) => {
        setOrderName(listProps.name)
        setOrderId(listProps.id)
        setStepsList([])
        setItemsList([])
        await mutate(domain + "order/items/" + id)
        await mutate(domain + "order/steps/" + id)
    }

    const { listProps, listType } = props;

    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [isStepDone, setStepDone] = useState(false);

    switch (listType) {
        case 'Orders':
            const propOrders = listProps as OrdersType;
            if (propOrders.isTemplate) {
                return
            }
            return (
                <li className={'list-item'}>
                    <Button eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small'></Button>
                    <span className='list-item__text' onClick={() => onOrderCLick(propOrders.id)}>{propOrders.name}</span>
                    <DeletePopUp type="order" show={show} setShow={setShow} id={propOrders.id} />
                </li>
            )
        case 'Items':
            const propItems = listProps as ItemsType;
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propItems.name}</span>
                    <Reducer initialCount={propItems.count} />
                    <Button eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small' />
                    <DeletePopUp type="item" show={show} setShow={setShow} id={propItems.id} />
                </li>
            )
        case 'Steps':
            const propSteps = listProps as StepsType;
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propSteps.name}</span>
                    <form>
                        <input type="text" value={new Date(propSteps.deadline).toDateString()} readOnly />
                        <button className="step__done" disabled={isStepDone} onClick={ () => setStepDone(true)} >
                            {isStepDone &&
                                <img className="step__done--button" src="src/images/check.png" />
                            }
                            {!isStepDone &&
                                <img className="step__done--button" src="src/images/verified.png" />
                            }
                        </button>
                    </form>
                    <Button eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small' />
                    <DeletePopUp type="step" show={show} setShow={setShow} id={propSteps.id} />
                </li>
            )
        case 'Templates':
            const propTemplates = listProps as OrdersType;
            if (!propTemplates.isTemplate) {
                return
            }
            return (
                <li className={'list-item'}>
                    <span className='list-item__text' onClick={() => onOrderCLick(propTemplates.id)}>{propTemplates.name}</span>
                    <Button eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small' />
                    <DeletePopUp type="template" show={show} setShow={setShow} id={propTemplates.id} />
                </li>
            )
    }

};

