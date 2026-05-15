'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const LeadModalContext = createContext(null);

/**
 * activeModal: null | 'contact' | 'diagnosis'
 *
 * Two entry points:
 *   openModal()      → ContactModal first (Book a Call flow)
 *   openDiagnosis()  → DiagnosisModal directly (Free Tools / Business Diagnosis flow)
 *   proceedToDiagnosis(data) → called internally from ContactModal
 */
export function LeadModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [contactData, setContactData]  = useState(null);

  // "Book a Call" flow — opens contact form first
  const openModal = useCallback(() => setActiveModal('contact'), []);

  // "Business Diagnosis" nav flow — opens diagnosis directly
  const openDiagnosis = useCallback(() => {
    setContactData(null);        // clear any old data — DiagnosisModal will collect inline
    setActiveModal('diagnosis');
  }, []);

  const proceedToDiagnosis = useCallback((data) => {
    setContactData(data);
    setActiveModal('diagnosis');
  }, []);

  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <LeadModalContext.Provider value={{ activeModal, contactData, openModal, openDiagnosis, proceedToDiagnosis, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error('useLeadModal must be used within a LeadModalProvider');
  return ctx;
}
