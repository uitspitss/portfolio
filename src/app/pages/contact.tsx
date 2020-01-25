import React from 'react';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import ContactForm from '../components/ContactForm';
import bgImg from '../public/images/keyboard.jpg';

const Contact = () => (
  <Sidebar>
    <BackImage image={bgImg}>
      <FloatingPaper>
        <ContactForm />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);

export default Contact;
