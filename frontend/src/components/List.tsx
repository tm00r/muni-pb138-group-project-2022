import React from 'react';
import useSWR from "swr";
import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { domain } from "../types/swrDomain";
import { orderIdAtom, allItemsListAtom, allStepsListAtom } from "../state/atom";

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

    const URL = `${domain}${endPoint.includes("te") ? endPoint + "/" + orderId : endPoint}`;

    const { data: listContent, error } = useSWR(URL, fetcher);
    const { data: orderData, error: orderError } = useSWR(domain + "order/" + orderId, fetcher);

    if (error) return (<p>E</p>)
    if (!listContent) return (<p>Loading...</p>)

    if (orderError) return (<p>E</p>)
    if (!orderData) return (<p>Loading...</p>)

    if (listType === "Items") {
        setAllItemsList(allItems => [...listContent.data, ...list])
    }
    else if (listType === "Steps") {
        setAllStepsList(allSteps => [...listContent.data, ...list])
    }

    return (
        <ul className={[listType ? `${listType.toLowerCase()}__list` : 'template__list', 'list '].join(' ')}>
            {
                listContent.data.map((arg) => (

                    <ListItem key={arg.id}
                        listType={listType}
                        listProps={arg}
                        isOrderFinished={orderData.data.isFinished}
                    />
                ))
            }
            {list &&
                list.map((arg) => (
                    <ListItem key={arg.id}
                        listType={listType}
                        listProps={arg}
                        isOrderFinished={orderData.data.isFinished}
                    />
                ))
            }
        </ul>
    )

};