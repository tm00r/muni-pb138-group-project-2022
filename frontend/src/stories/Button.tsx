import React from 'react';
import '../index.css';
import './button.css';


interface ButtonProps {
  color: 'gray' | 'dark' | 'orange';
  size?: 'primary' | 'small'| 'wide';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  color = 'gray',
  size,
  label,
  ...props
}: ButtonProps) => {

  const mode = `button--${color} button--${size}`;

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
      {...props}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      {label}
    </button>
  );
};
