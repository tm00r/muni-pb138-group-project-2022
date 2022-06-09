import React, {useState} from 'react';
import {domain} from "../types/swrDomain";
import {mutate} from "swr";
import {useRecoilValue, useSetRecoilState} from "recoil";

import {Button} from './Button';
import {Reducer} from './Reducer';
import {DeletePopUp} from './DeletePopUp';

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
import {PopUpWindow} from "./PopUpWindow";


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

    const {listProps, listType} = props;

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
                <li className={ `list-item ${propOrders.isFinished ?  'list-item--finished' : ''}`}>
                    <Button eventProp={handleShow} label={<i className="fa fa-trash"></i>} color="orange" size='small'></Button>
                    <span className='list-item__text' onClick={() => onOrderCLick(propOrders.id)}>{propOrders.name}</span>
                    <DeletePopUp type="order" show={show} setShow={setShow} id={propOrders.id} />
                    <PopUpWindow type="order" show={showCancel} setShow={setShowCancel} />
                </li>
            )
        case 'Items':
            const propItems = listProps as ItemsType;
            setItemId(propItems.id)
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propItems.name}</span>
                    <Reducer initialCount={propItems.count} itemId={propItems.id}/>
                    <DeletePopUp type="item" show={show} setShow={setShow} id={propItems.id}/>
                </li>
            )
        case 'Steps':
            const propSteps = listProps as StepsType;
            const listItemClassName = () => {
                if (!isTemplate && !props.isOrderFinished && (new Date(propSteps.deadline) < new Date())) {
                    return 'list-item--late'
                }
                return ''
            }
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propSteps.name}</span>
                    <form className="list-item__form">
                        <input className={"list-item__deadline " + listItemClassName()} type="text" value={new Date(propSteps.deadline).toDateString()} readOnly={!isTemplate} />
                        {!isTemplate &&
                            <button className="step__done" disabled={propSteps.isFinished} type="button" onClick={() => onStepDone(propSteps.id, propSteps.orderId)} >
                                {propSteps.isFinished &&
                                    <img className="step__done--button" src="src/images/check.png"/>
                                }
                                {!propSteps.isFinished &&
                                    <img className="step__done--button" src="src/images/verified.png"/>
                                }
                            </button>
                        }
                    </form>

                    <DeletePopUp type="step" show={show} setShow={setShow} id={propSteps.id}/>
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
                    <PopUpWindow type="order" show={showCancel} setShow={setShowCancel} />
                </li>
            )
    }

};

