import React from 'react';
import useSWR from "swr";
import fetch from 'unfetch'
import axios from "axios";

import { ListItem } from './ListItem';

import '../styles/list.css';
import '../styles/variables.css';

export interface ListProps {
    editable: boolean;
    cropPosition?: string;
    endPoint: string;
}

const apiKey = 'http://127.0.0.1:4000/'   // TODO: change to production

export const List: React.FC<ListProps> = (props) => {

    const { cropPosition, editable, endPoint} = props;

    const mode = cropPosition ? `list--${cropPosition}` : 'list--main';

    const withReducer = editable ? true : false;

    const URL = `${apiKey}${endPoint}`;

    const fetcher = async (url: string) => await (
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error))
    )

    const { data: orders, error } = useSWR(URL, fetcher, {
        revalidateOnFocus: true,    // auto revalidate when the window is focused
    });

    if (error) return(<p>Failed...</p>);
    if (!orders) return(<h1>Loading...</h1>);

    return (
        <ul className={['list', mode].join(' ')}>
            {orders.data.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        text={item.name}
                        withReducer = {withReducer}
                    />
                );
            })}
        </ul >
    );
};
