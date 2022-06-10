import React, { useState } from 'react';
import { domain } from "../types/swrDomain";
import { mutate } from "swr";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Button } from './Button';
import { Reducer } from './Reducer';
import { DeletePopUp } from './DeletePopUp';
import { PopUpWindow } from "./PopUpWindow";

import {
    allItemsListAtom,
    isTemplateAtom,
    itemIdAtom,
    itemsListAtom,
    orderIdAtom,
    orderNameAtom,
    orderSubmitNameAtom,
    stepsListAtom
} from "../state/atom";
import axios from "axios";

import '../styles/listitem.css';
import '../styles/variables.css';



interface ListItemProps {
    listProps: GeneralListItemType;
    listType: "Items" | "Steps" | "Orders" | "Templates";
    isOrderFinished: boolean
}

// @ts-ignore
export const ListItem: React.FC<ListItemProps> = (props) => {
    const orderSubmitName = useRecoilValue(orderSubmitNameAtom)
    const stepsList = useRecoilValue(stepsListAtom)
    const itemsList = useRecoilValue(itemsListAtom)


    const setOrderId = useSetRecoilState(orderIdAtom)
    const setIsTemplate = useSetRecoilState(isTemplateAtom)
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setStepsList = useSetRecoilState(stepsListAtom)
    const setItemsList = useSetRecoilState(itemsListAtom)

    const setItemId = useSetRecoilState(itemIdAtom);
    const orderId = useRecoilValue(orderIdAtom)
    const isTemplate = useRecoilValue(isTemplateAtom)

    const onOrderCLick = async (id: String) => {
        if ((orderSubmitName != "" || stepsList.length != 0 || itemsList.length != 0)) {
            setShowCancel(true)
        } else {
            const order = listProps as OrdersType
            setOrderName(listProps.name)
            setIsTemplate(order.isTemplate)
            setOrderId(listProps.id)
            setStepsList([])
            setItemsList([])
            await mutate(domain + "order/items/" + id)
            await mutate(domain + "order/steps/" + id)
        }
    }
    const onStepDone = async (stepId: string, orderId: string) => {
        await axios.put(domain + "order/steps/" + stepId, {})
        await mutate(domain + "order")
        await mutate(domain + "order/" + orderId)
        await mutate(domain + "order/steps/" + orderId)
    }

    const { listProps, listType } = props;

    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }

    const [show, setShow] = useState(false);
    const [showCancel, setShowCancel] = useState(false);

    const handleShow = () => setShow(true);
    const handleShowCancel = () => setShowCancel(true);

    switch (listType) {
        case 'Orders':
            const propOrders = listProps as OrdersType;
            if (propOrders.isTemplate) {
                return
            }
            return (
                <li className={`list__item`}>
                    <div className="list__button-container">
                        <Button classMode={`${propOrders.isFinished ? 'done' : 'not-done'} box`} label='&#10003;' color="green" size='small' disabled={true} />
                        <Button classMode="delete box stack-top" eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small' />
                    </div>
                    <span className='list__item--text' onClick={() => onOrderCLick(propOrders.id)}>{propOrders.name}</span>
                    <DeletePopUp type="order" show={show} setShow={setShow} id={propOrders.id} />
                    <PopUpWindow type="order" show={showCancel} setShow={setShowCancel} />
                </li>
            )
        case 'Items':
            const propItems = listProps as ItemsType;
            setItemId(propItems.id)
            return (
                <li className={'list__item'}>
                    <span className='list__item--text'>{propItems.name}</span>
                    <Reducer initialCount={propItems.count} itemId={propItems.id} />
                    <DeletePopUp type="item" show={show} setShow={setShow} id={propItems.id} />
                </li>
            )
        case 'Steps':
            const propSteps = listProps as StepsType;
            const listItemClassName = () => {
                if (!isTemplate && !props.isOrderFinished && (new Date(propSteps.deadline) < new Date())) {
                    return 'list__item--late'
                }
                return ''
            }
            return (
                <li className={'list__item'}>
                    <span className='list__item--text'>{propSteps.name}</span>
                    <span className={"list__item--deadline " + listItemClassName()}>{new Date(propSteps.deadline).toDateString()} </span>
                    {!isTemplate &&
                        <button className="step__done" disabled={propSteps.isFinished} type="button" onClick={() => onStepDone(propSteps.id, propSteps.orderId)} >
                            {propSteps.isFinished &&
                                <Button classMode="step__done--button" label='&#10003;' color="green" size='small' />
                            }
                            {!propSteps.isFinished &&
                                <Button classMode="step__done--button" label='&#10003;' color="gray" size='small' />
                            }
                        </button>
                    }

                    <DeletePopUp type="step" show={show} setShow={setShow} id={propSteps.id} />
                </li>
            )
        case 'Templates':
            const propTemplates = listProps as OrdersType;
            if (!propTemplates.isTemplate) {
                return
            }
            return (
                <li className={'list__item'}>
                    <span className='list__item--text' onClick={() => onOrderCLick(propTemplates.id)}>{propTemplates.name}</span>
                    <Button classMode="delete" eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small' />
                    <DeletePopUp type="template" show={show} setShow={setShow} id={propTemplates.id} />
                    <PopUpWindow type="order" show={showCancel} setShow={setShowCancel} />
                </li>
            )
    }

};

