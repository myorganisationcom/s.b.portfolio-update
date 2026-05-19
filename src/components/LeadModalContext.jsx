'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const LeadModalContext = createContext(null);

/**
 * activeModal: null | 'contact' | 'diagnosis' | 'audit' | 'book'
 *
 * Entry points:
 *   openModal()      → ContactModal first (legacy Book a Call flow)
 *   openDiagnosis()  → DiagnosisModal directly (Business Diagnosis flow)
 *   openAudit()      → Full Business Growth Audit funnel popup
 *   openBook()       → Book a Strategy Call popup
 *   proceedToDiagnosis(data) → called internally from ContactModal
 */
export function LeadModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [contactData, setContactData]  = useState(null);

  // "Book a Call" flow — opens contact form first
  const openModal = useCallback(() => setActiveModal('contact'), []);

  // "Business Diagnosis" nav flow — opens diagnosis directly
  const openDiagnosis = useCallback(() => {
    setContactData(null);
    setActiveModal('diagnosis');
  }, []);

  // Full Business Growth Audit funnel popup
  const openAudit = useCallback(() => setActiveModal('audit'), []);

  // Book a Strategy Call popup
  const openBook = useCallback(() => setActiveModal('book'), []);

  const proceedToDiagnosis = useCallback((data) => {
    setContactData(data);
    setActiveModal('diagnosis');
  }, []);

  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <LeadModalContext.Provider value={{ activeModal, contactData, openModal, openDiagnosis, openAudit, openBook, proceedToDiagnosis, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error('useLeadModal must be used within a LeadModalProvider');
  return ctx;
}
