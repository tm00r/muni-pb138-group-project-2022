import React from 'react';
import { ListItem } from './ListItem';
import { TemplateData } from '../data/FakeData';

import '../styles/list.css';
import '../styles/variables.css';

export interface ListProps {
    editable: boolean;
    cropPosition?: string;
}

export const List: React.FC<ListProps> = (props) => {

    const { cropPosition, editable } = props;
    const mode = cropPosition ? `list--${cropPosition}` : 'list--main';


    // we need to change that with API
    const [items, setItems] = React.useState(TemplateData);

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
