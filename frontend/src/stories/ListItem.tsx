import React from 'react';
import './listitem.css';

interface ListItemProps {
  type?: string;
  backgroundColor?: string;
  size?: 'small' | 'main' | 'wide';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ListItem = ({
  type = 'main',
  size = 'main',
  backgroundColor,
  label,
  ...props
}: ListItemProps) => {
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
