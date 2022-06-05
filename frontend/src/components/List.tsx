import React, { useEffect, useState, useLayoutEffect } from 'react';
import useSWR from "swr";
import axios from "axios";
import { ListItem } from './ListItem';
import { ListItem2 } from './ListItem2';

import '../styles/list.css';
import '../styles/variables.css';

export interface ListProps {
    listType: "Items" | "Steps" | "Orders";
    isEditable: boolean;
    endPoint: string;
}


export const List: React.FC<ListProps> = (props) => {

    const { listType, endPoint } = props;


    const apiKey = 'http://127.0.0.1:4000/'   // TODO: change to production
    const URL = `${apiKey}${endPoint}`;
    const fetcher = async (url: string) => await (
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error))
    )
    const { data: data, error } = useSWR(URL, fetcher);

    if (error) return(<p>E</p>)
    if (!data) return(<p>Loading...</p>)


    return (
        <ul className={[listType ? `${listType.toLowerCase()}__list` : 'template__list', 'list '].join(' ')}>
            {
                data.data.map((arg) => (
                    <ListItem2 key={arg.id}
                        listType={listType}
                        listProps={arg}
                    />
                ))
            }
        </ul>
    )

};