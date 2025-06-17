import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import '../styles/App.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  as?: React.ComponentType<any>;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  className = '',
  as: Component = 'button',
  to,
  ...props
}) => {
  const buttonClasses = `btn ${variant} ${loading ? 'loading' : ''} ${className}`.trim();

  if (Component === 'button') {
    return (
      <button
        type={type}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Component
      className={buttonClasses}
      to={to}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button; 