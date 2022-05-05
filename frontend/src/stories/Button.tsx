import React from 'react';
import './button.css';

interface ButtonProps {
  type?: string;
  backgroundColor?: string;
  size?: 'small' | 'main' | 'wide';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'main',
  size = 'main',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = `storybook-button--${type}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
