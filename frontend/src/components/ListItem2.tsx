import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Reducer} from './Reducer';


import '../styles/listitem.css';
import '../styles/variables.css';

interface ListItemProps {
    listProps: GeneralListItemType;
    listType: "Items" | "Steps" | "Orders" | "Templates";
}

export const ListItem2: React.FC<ListItemProps> = (props) => {

    const {listProps, listType} = props;

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
                <li className={'list-item'}>
                    <a
                        className='list-item__link link'
                        href={`/order/${propOrders.id}`}
                    >
                        {propOrders.name}
                    </a>
                </li>
            )
        case 'Items':
            const propItems = listProps as ItemsType;
            return (
                <li className={'list-item'}>
                    <a
                        className='list-item__link link'
                        href="/template/1"
                    >
                        {propItems.name}
                    </a>
                    <Reducer initialCount={propItems.count}/>
                </li>
            )
        case 'Steps':
            const propSteps = listProps as StepsType;
            return (
                <li className={'list-item'}>
                    <a
                        className='list-item__link link'
                        href="/template/1"
                    >
                        {propSteps.name}
                    </a>
                    <form>
                        <input type="datetime-local" value={propSteps.deadline} readOnly/>
                        <input className="checkbox" onClick={handleClick} defaultChecked={propSteps.isFinished}
                               type="checkbox"/>
                    </form>
                </li>
            )
        case 'Templates':
            const propTemplates = listProps as OrdersType;
            if (!propTemplates.isTemplate) {
                return
            }
            return (
                <li className={'list-item'}>
                    <a
                        className='list-item__link link'
                        href={`/order/${propTemplates.id}`}
                    >
                        {propTemplates.name}
                    </a>
                </li>
            )
    }

};

