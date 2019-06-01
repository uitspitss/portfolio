import React from 'react';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import ContactForm from '../components/ContactForm';

export default () => (
  <Sidebar>
    <BackImage image="static/keyboard.jpg">
      <FloatingPaper>
        <ContactForm />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);
