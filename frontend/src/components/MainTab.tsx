import React from 'react';
import { List } from './List';
import { Button } from './Button';

import '../styles/variables.css';
import '../styles/main.css';

export interface MainTabProps {
    contentType: "Items" | "Steps";
}

export const MainTab: React.FC<MainTabProps> = (props) => {

    const { contentType } = props;

    const editable = contentType === "Items" ? true : false;

    return (
        <div className='main__tab'>
            <div className='tab__label'>
                <span className=''>{contentType}</span>
            </div>
            <List editable={editable} />
            <div className='tab__button'>
                <Button
                    size="primary"
                    color="gray"
                    label={`Add ${contentType}`.slice(0, -1)}
                />
            </div>
        </div>
    );
};
