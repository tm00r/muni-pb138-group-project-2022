import React from 'react';
import useSWR from "swr";
import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { domain } from "../static/swrDomain";
import {orderIdAtom, allItemsListAtom, allStepsListAtom, stepsListAtom, itemsListAtom} from "../state/atom";

import { ListItem } from './ListItem';

import '../styles/list.css';
import '../styles/variables.css';
import {fetcher} from "../state/fetcher";


export interface ListProps {
    listType: "Templates" | "Items" | "Steps" | "Orders";
    isEditable: boolean;
    endPoint: string;
    list: ItemsType[] | StepsType[]
}

export const List: React.FC<ListProps> = (props) => {

    const { listType, endPoint, list } = props;

    const orderId = useRecoilValue(orderIdAtom)

    const setAllItemsList = useSetRecoilState(allItemsListAtom)
    const setAllStepsList = useSetRecoilState(allStepsListAtom)

    const stepsList = useRecoilValue(stepsListAtom)
    const itemsList = useRecoilValue(itemsListAtom)

    const URL = `${domain}${endPoint.includes("te") ? endPoint + "/" + orderId : endPoint}`;

    const { data: listContent, error } = useSWR(URL, fetcher);
    const { data: orderData, error: orderError } = useSWR(domain + "order/" + orderId, fetcher);

    if (error) return (<p>E</p>)
    if (!listContent) return (<p>Loading...</p>)

    if (orderError) return (<p>E</p>)
    if (!orderData) return (<p>Loading...</p>)

    if (listType === "Items") {
        setAllItemsList(allItems => [...listContent.data, ...itemsList])
    }
    else if (listType === "Steps") {
        setAllStepsList(allSteps => [...listContent.data, ...stepsList])
    }

    return (
        <ul className={[listType ? `${listType.toLowerCase()}__list` : 'template__list', 'list '].join(' ')}>
            {
                listContent.data.map((arg) => (

                    <ListItem key={arg.id}
                        listType={listType}
                        listProps={arg}
                        isOrderFinished={orderData.data ? orderData.data.isFinished : false}
                    />
                ))
            }
            {list &&
                list.map((arg) => (
                    <ListItem key={arg.id}
                        listType={listType}
                        listProps={arg}
                        isOrderFinished={orderData.data ? orderData.data.isFinished : false}
                    />
                ))
            }
        </ul>
    )

};