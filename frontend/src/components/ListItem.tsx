import React, { useState } from 'react';
import { domain } from "../types/swrDomain";
import { mutate } from "swr";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Button } from './Button';
import { Reducer } from './Reducer';
import { DeletePopUp } from './DeletePopUp';

import { isTemplateAtom, itemIdAtom, itemsListAtom, orderIdAtom, orderNameAtom, stepsListAtom } from "../state/atom";
import axios from "axios";

import '../styles/listitem.css';
import '../styles/variables.css';


interface ListItemProps {
    listProps: GeneralListItemType;
    listType: "Items" | "Steps" | "Orders" | "Templates";

}

// @ts-ignore
export const ListItem: React.FC<ListItemProps> = (props) => {
    const setOrderId = useSetRecoilState(orderIdAtom)
    const setIsTemplate = useSetRecoilState(isTemplateAtom)
    const setOrderName = useSetRecoilState(orderNameAtom)
    const setStepsList = useSetRecoilState(stepsListAtom)
    const setItemsList = useSetRecoilState(itemsListAtom)

    const setItemId = useSetRecoilState(itemIdAtom);
    const orderId = useRecoilValue(orderIdAtom)
    const isTemplate = useRecoilValue(isTemplateAtom)

    const onOrderCLick = async (id: String) => {
        const order = listProps as OrdersType
        setOrderName(listProps.name)
        setIsTemplate(order.isTemplate)
        setOrderId(listProps.id)
        setStepsList([])
        setItemsList([])
        await mutate(domain + "order/items/" + id)
        await mutate(domain + "order/steps/" + id)
    }
    const onStepDone = async (id: string) => {
        await axios.put(domain + "order/steps/" + id, {})
        await mutate(domain + "order")
        await mutate(domain + "order/steps/" + orderId)
    }

    const { listProps, listType } = props;

    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    switch (listType) {
        case 'Orders':
            const propOrders = listProps as OrdersType;
            if (propOrders.isTemplate) {
                return
            }
            return (
                <li className={ propOrders.isFinished ?  'list-item finished' : 'list-item'}>
                    <Button eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small'></Button>
                    <span className='list-item__text' onClick={() => onOrderCLick(propOrders.id)}>{propOrders.name}</span>
                    <DeletePopUp type="order" show={show} setShow={setShow} id={propOrders.id} />
                </li>
            )
        case 'Items':
            const propItems = listProps as ItemsType;
            setItemId(propItems.id)
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propItems.name}</span>
                    <Reducer initialCount={propItems.count} />
                    <DeletePopUp type="item" show={show} setShow={setShow} id={propItems.id} />
                </li>
            )
        case 'Steps':
            const propSteps = listProps as StepsType;
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propSteps.name}</span>
                    <form>
                        <input type="text" value={new Date(propSteps.deadline).toDateString()} readOnly={!isTemplate} />
                        {!isTemplate &&
                            <button className="step__done" disabled={propSteps.isFinished} type="button" onClick={() => onStepDone(propSteps.id)} >
                                {propSteps.isFinished &&
                                    <img className="step__done--button" src="src/images/check.png" />
                                }
                                {!propSteps.isFinished &&
                                    <img className="step__done--button" src="src/images/verified.png" />
                                }
                            </button>
                        }
                    </form>

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

