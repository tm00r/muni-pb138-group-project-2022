import React from 'react';
import { Reducer } from './Reducer';

import '../styles/listitem.css';
import '../styles/variables.css';

interface ListItemProps {
  text: string;
  withReducer: boolean;
}

export const ListItem: React.FC <ListItemProps> = (props) => {

  const { text, withReducer } = props;



  return (
    <li className={'list-item'}>
      <a
        className='list-item__link link'
        href='#'
      >
        {text}
      </a>
      { withReducer && ( <Reducer initialCount={16} /> ) }
    </li >
  );
};

