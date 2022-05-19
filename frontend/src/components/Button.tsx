import React, { ChangeEventHandler } from 'react';

import '../styles/button.css';
import '../styles/variables.css';

interface ButtonProps {
  color: 'gray' | 'dark' | 'orange';
  size: 'primary' | 'small'| 'wide' | 'middle';
  label: string;
  eventProp?: any;   // disgusting approach but it works...
}

export const Button: React.FC<ButtonProps> = (props) => {

  const { color, size, label, event } = props;

  const mode = `button--${color} button--${size || 'primary'}`;

  const handleMouseDown = (e) => {
    e.target.style.boxShadow = `var(--shadow-${color})`;
  }

  const handleMouseUp = (e) => {
    e.target.style = '';
  }

  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      onClick = {event}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      {label}
    </button>
  );
};
