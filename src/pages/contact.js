import React from 'react';
import ContactForm from '../frontend/components/ContactForm/ContactForm';
import Footer from '../frontend/components/Footer/Footer';

export default () => (
  <div className="contact-container">
    <div className="contact-form-container">
      <h2 className="contact-header">Let's Connect</h2>
      <ContactForm />
    </div>
    <Footer />
  </div>
);
