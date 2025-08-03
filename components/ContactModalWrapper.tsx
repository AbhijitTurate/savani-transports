'use client';

import React from 'react';
import { ContactModalProvider, useContactModal } from './ContactModalContext';
import ContactModal from './ContactModal';

// Inner component that uses the modal
const ContactModalInner: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useContactModal();
  
  return (
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={closeContactModal} 
    />
  );
};

// Main wrapper component
const ContactModalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ContactModalProvider>
      {children}
      <ContactModalInner />
    </ContactModalProvider>
  );
};

export default ContactModalWrapper; 