'use client';

import React from 'react';
import { LoadingProvider, useLoading } from './LoadingContext';
import { ContactModalProvider, useContactModal } from './ContactModalContext';
import BlackLoadingScreen from './BlackLoadingScreen';
import ContactModal from './ContactModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Inner component that uses both contexts
const AppInner: React.FC = () => {
  const { isLoading, hideLoadingScreen } = useLoading();
  const { isContactModalOpen, closeContactModal } = useContactModal();
  
  return (
    <>
      {isLoading && (
        <BlackLoadingScreen onLoadingComplete={hideLoadingScreen} />
      )}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        closeOnClick
      />
    </>
  );
};

// Main wrapper component
const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadingProvider>
      <ContactModalProvider>
        {children}
        <AppInner />
      </ContactModalProvider>
    </LoadingProvider>
  );
};

export default AppWrapper; 