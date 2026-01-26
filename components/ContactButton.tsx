'use client';

import React from 'react';
import { useContactModal } from './ContactModalContext';

interface ContactButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'primary_white';
  size?: 'sm' | 'md' | 'lg';
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'outline',
  size = 'md'
}) => {
  const { openContactModal } = useContactModal();

  const baseClasses = 'font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-brandIndigo text-white hover:bg-white hover:text-brandIndigo hover:border-brandIndigo hover:border',
    primary_white: 'bg-white text-brandIndigo hover:bg-brandIndigo hover:text-white hover:border-white hover:border',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'bg-transparent border border-brandIndigo text-brandIndigo hover:bg-brandIndigo hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      onClick={openContactModal}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default ContactButton; 