import React from 'react';
import { ListItem } from './ListItem';
import { TemplateData } from '../data/FakeData';

import '../styles/list.css';
import '../styles/variables.css';

export interface ListProps {
    cropPosition: string;
}

export const List: React.FC<ListProps> = (props) => {

    const { cropPosition } = props;
    const mode = cropPosition ? `list--${cropPosition}` : '';


    // we need to change that with API
    const [items, setItems] = React.useState(TemplateData);


    return (
        <ul className={['list', mode].join(' ')}>
            {items.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        crop={cropPosition}
                        text={item.name}
                    />
                );
            })}
        </ul>
    );
};
