import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openContact = (service = null) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeContact = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  return (
    <ContactContext.Provider value={{ isOpen, selectedService, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
