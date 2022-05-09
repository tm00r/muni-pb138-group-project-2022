import React from 'react';

import '../styles/listitem.css';
import '../styles/variables.css';

interface ListItemProps {
  crop: string;
  text: string;
}

export const ListItem: React.FC <ListItemProps> = (props) => {

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

