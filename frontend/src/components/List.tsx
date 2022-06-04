import React, { useEffect, useState, useLayoutEffect } from 'react';
import useSWR from "swr";
import fetch from 'unfetch'
import axios from "axios";
import { ListItem } from './ListItem';

import '../styles/list.css';
import '../styles/variables.css';

export interface ListProps {
    editable: boolean;
    cropPosition?: string;
    endPoint?: string;
    step?: boolean;
    done?: boolean;
    setDone?: any;
}

const apiKey = 'http://127.0.0.1:4000/'   // TODO: change to production

export const List: React.FC<ListProps> = (props) => {
    const { cropPosition, editable, endPoint, step, done, setDone } = props;

    const mode = cropPosition ? `list--${cropPosition}` : 'list--main';
    const withReducer = editable ? true : false;

    const [count, setCount] = useState(1);
    useLayoutEffect(() => {
        if (count === 3 && !done) {
            setDone(true);
        }
        if (done && count !== 3) {
            setDone(false);
        }
    },[count]);

    const URL = `${apiKey}${endPoint}`;
    const StepsURL = `${apiKey}/order/items/${endPoint}`;

    const fetcher = async (url: string) => await (
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error))
    )

    const { data: orders, error:any } = useSWR(URL, fetcher, {
        revalidateOnFocus: true,    // auto revalidate when the window is focused
    });

    const { data: steps, error } = useSWR(StepsURL, fetcher, {
        revalidateOnFocus: true,    // auto revalidate when the window is focused
    });


    if (error) return(<p>Failed...</p>);
    if (!orders) return(<h1>Loading...</h1>);

    return (
        <ul className={['list', mode].join(' ')}>
            {orders.data.map((item: any) => {
                return (
                    <>
                    {!step &&
                    <ListItem
                        key={item.id}
                        text={item.name}
                        withReducer = {withReducer}
                    />}
                    {step && <ListItem
                        key={item.id}
                        text={item.name}
                        withReducer = {withReducer}
                        step={step}
                        count={count}
                        setCount={setCount}/>}
                    </>
                );
            })}
        </ul >
    );
};
