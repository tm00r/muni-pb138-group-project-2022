import React, { ChangeEventHandler } from 'react';

import '../styles/button.css';
import '../styles/variables.css';

interface ButtonProps {
  classMode?: string;
  color: 'gray' | 'dark' | 'orange' | 'green';
  size: 'primary' | 'small' | 'wide' | 'middle';
  label: JSX.Element | string;
  eventProp?: any;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {

  const { classMode, color, size, label, eventProp} = props;

  const mode = `${classMode ? `button--${classMode}` : ""} button--${size || 'primary'} button--${color}`;

  const handleMouseDown = (e: any) => {
    if (e.target === e.currentTarget) {
      e.target.style.boxShadow = `var(--shadow-${color})`;
    }
  }

  const handleMouseUp = (e: any) => {
    e.target.style.boxShadow = "";
  }

  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      onClick={eventProp}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      {label}
    </button>
  );
};
