import React from 'react';
import useSWR from "swr";

import { ListItem } from './ListItem';
import { TemplateData } from '../data/FakeData';

import '../styles/list.css';
import '../styles/variables.css';

export interface ListProps {
    editable: boolean;
    cropPosition?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const List: React.FC<ListProps> = (props) => {

    const { items, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
      );

    if (error) return (<div>An error has occurred.</div>)
    if (!items) return (<div>Loading...</div>)


    const { cropPosition, editable } = props;
    const mode = cropPosition ? `list--${cropPosition}` : 'list--main';



    const withReducer = editable ? true : false;

    return (
        <ul className={['list', mode].join(' ')}>
            {items.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        text={item.name}
                        withReducer = {withReducer}
                    />
                );
            })}
        </ul>
    );
};
