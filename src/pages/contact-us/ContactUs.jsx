import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import OfficeAddress from './OfficeAddresses';

const ContactUs = () => {
  return (
    <Routes>
    <Route path="contact-form" element={<ContactForm />} />
    {/* <Route path="org-structure" element={<OrgStructure />} />
    <Route path="board-members" element={<BoardMembers />} />
    <Route path="contact-info" element={<ContactInfo />} /> */}
      <Route path="office-locations" element={<OfficeAddress />} /> 
  </Routes>
  )
}

export default ContactUs