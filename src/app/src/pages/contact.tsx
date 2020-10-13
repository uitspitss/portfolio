import React from 'react';
import { NextPage } from 'next';

import BackImage from '@/components/BackImage';
import Sidebar from '@/components/Sidebar';
import FloatingPaper from '@/components/FloatingPaper';
import ContactForm from '@/components/ContactForm';
import bgImg from '@/public/images/keyboard.jpg';

const ContactPage: NextPage = () => (
  <Sidebar>
    <BackImage image={bgImg}>
      <FloatingPaper>
        <ContactForm />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);

export default ContactPage;
