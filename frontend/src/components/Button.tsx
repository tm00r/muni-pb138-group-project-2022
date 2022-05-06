import React from 'react';

import '../styles/button.css';
import '../styles/variables.css';

interface ButtonProps {
  color: 'gray' | 'dark' | 'orange';
  size: 'primary' | 'small'| 'wide';
  label: string;
}

export const Button: React.FC<ButtonProps> = (props) => {

  const { color, size, label } = props;

  const mode = `button--${color} button--${size || 'primary'}`;

  const handleMouseDown = (e) => {
    e.target.style.boxShadow = `var(--shadow-${color})`;
  }

  const handleMouseUp = (e) => {
    e.target.style.boxShadow = 'var(--shadow-background)';
  }

  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      {label}
    </button>
  );
};
