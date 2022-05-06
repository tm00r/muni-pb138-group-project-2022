import React from 'react';
import '../index.css';
import './listitem.css';

interface ListItemProps {
  crop?: string;
  text?: string;
}

export const ListItem: React.FC = (props: ListItemProps) => {

  const { crop, text } = props;

  const mode = [`list-item--${''}`, (crop ? `list-item--${crop}` : '')].join(' ');

  return (
    <li className={['list-item', mode].join(' ')}>
      <a
        className='list-item__link link'
        href='#'
      >
        {text}
      </a>
    </li >
  );
};