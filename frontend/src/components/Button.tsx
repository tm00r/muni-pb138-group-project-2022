import React from 'react';

import '../styles/button.css';
import '../styles/variables.css';

interface ButtonProps {
  color: 'gray' | 'dark' | 'orange';
  size: 'primary' | 'small'| 'wide' | 'middle';
  label: string;
  eventProp?: any;
}

export const Button: React.FC<ButtonProps> = (props) => {

  const { color, size, label, eventProp } = props;

  const mode = `button--${color} button--${size || 'primary'}`;

  const handleMouseDown = (e: any) => {
    e.target.style.boxShadow = `var(--shadow-${color})`;
  }

  const handleMouseUp = (e: any) => {
    e.target.style.boxShadow = 'var(--shadow-background)';
  }

  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      onClick={eventProp}
    >
      {label}
    </button>
  );
};
