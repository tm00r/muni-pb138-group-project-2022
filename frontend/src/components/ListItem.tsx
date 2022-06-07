import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Reducer } from './Reducer';


import '../styles/listitem.css';
import '../styles/variables.css';
import { domain } from "../types/swrDomain";
import { mutate } from "swr";
import { useSetRecoilState } from "recoil";
import { itemsListAtom, orderIdAtom, orderNameAtom, stepsListAtom, orderIsFinishedAtom } from "../state/atom";

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

    switch (listType) {
        case 'Orders':
            const propOrders = listProps as OrdersType;
            if (propOrders.isTemplate) {
                return
            }
            return (
                <li className={'list-item'} onClick={() => onOrderCLick(propOrders.id)}>
                    <span className='list-item__text'>{propOrders.name}</span>
                </li>
            )
        case 'Items':
            const propItems = listProps as ItemsType;
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propItems.name}</span>
                    <Reducer initialCount={propItems.count} />
                </li>
            )
        case 'Steps':
            const propSteps = listProps as StepsType;
            return (
                <li className={'list-item'}>
                    <span className='list-item__text'>{propSteps.name}</span>
                    <form>
                        <input type="text" value={new Date(propSteps.deadline).toDateString()} readOnly />
                        <input className="checkbox" onClick={handleClick} defaultChecked={propSteps.isFinished}
                            type="checkbox" />
                    </form>
                </li>
            )
        case 'Templates':
            const propTemplates = listProps as OrdersType;
            if (!propTemplates.isTemplate) {
                return
            }
            return (
                <li className={'list-item'} onClick={() => onOrderCLick(propTemplates.id)}>
                    <span className='list-item__text'>{propTemplates.name}</span>
                </li>
            )
    }

};

