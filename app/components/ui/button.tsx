// app/components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode; // Accept children as a prop
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children} {/* Render the content passed as children */}
    </button>
  );
};

export default Button;
