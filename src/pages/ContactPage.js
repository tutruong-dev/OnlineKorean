import React from 'react'; 
import ContactForm from '../components/Contact/contact';
import Breakcrumb from '../components/Contact/breakcrumb'

const ContactPages = () => {
    return (
      <div className="TestPages-page">
        <Breakcrumb />
        <ContactForm />
      </div>
    );
  };
  export default ContactPages;