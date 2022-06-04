import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Reducer } from './Reducer';
import { Form } from 'react-bootstrap';

import '../styles/listitem.css';
import '../styles/variables.css';

interface ListItemProps {
  text: string;
  withReducer: boolean;
  step?: boolean;
  count?: number;
  setCount?: any;
}

export const ListItem: React.FC <ListItemProps> = (props) => {

  const { text, withReducer, step, count, setCount } = props;

  const [checked, setChecked] = useState(false)
  const handleClick = () => {setChecked(!checked)}
  
  useLayoutEffect(() => {
    if (count !== undefined && checked === true) {
      setCount(() => count + 1);
    }
    if (count !== undefined && checked === false) {
      setCount(() => count - 1);
    }
  }, [checked]);

  return (
    <li className={'list-item'}>
      <a
        className='list-item__link link'
        href="/template/1"
      >
        {text}
      </a>
      { withReducer && ( <Reducer initialCount={16} /> ) }
      { step && (
         <input className="checkbox" onClick={handleClick} checked={checked} type="checkbox" />
      )}
    </li >
  );
};

