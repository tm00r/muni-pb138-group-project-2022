import React, { useEffect, useState, useLayoutEffect } from 'react';
import useSWR from "swr";
import axios from "axios";
import { ListItemOld } from './ListItem-old';
import { ListItem } from './ListItem';

import '../styles/list.css';
import '../styles/variables.css';
import {domain} from "../types/swrDomain";
import {useSetRecoilState} from "recoil";
import {allItemsListAtom, allStepsListAtom} from "../state/atom";
import {allStepsListSelector} from "../state/selectors";

export interface ListProps {
    listType: "Items" | "Steps" | "Orders";
    isEditable: boolean;
    endPoint: string;
    list: ItemsType[] | StepsType[]
}


export const List: React.FC<ListProps> = (props) => {
    const setAllItemsList = useSetRecoilState(allItemsListAtom)
    const setAllStepsList = useSetRecoilState(allStepsListAtom)
    const { listType, endPoint, list}  = props;

    const URL = `${domain}${endPoint}`;
    const fetcher = async (url: string) => await (
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error))
    )
    const { data: data, error } = useSWR(URL, fetcher);

    if (error) return(<p>E</p>)
    if (!data) return(<p>Loading...</p>)

    if (listType === "Items"){
        setAllItemsList(allItems => [...data.data, ...list])
    }
    else if (listType === "Steps"){
        setAllStepsList(allSteps => [...data.data, ...list])

    }

    return (
        <ul className={[listType ? `${listType.toLowerCase()}__list` : 'template__list', 'list '].join(' ')}>
            {
                data.data.map((arg) => (

                    <ListItem key={arg.id}
                              listType={listType}
                              listProps={arg}
                    />
                ))
            }
            {list &&
                list.map((arg) => (
                    <ListItem key={arg.id}
                              listType={listType}
                              listProps={arg}
                    />
                ))
            }
        </ul>
    )

};