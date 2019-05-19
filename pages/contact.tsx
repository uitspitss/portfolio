import React from 'react';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import ContactForm from '../components/ContactForm';

const sidebarWidth = 150;

export default () => (
  <React.Fragment>
    <Sidebar />
    <div className="home-content">
      <BackImage image="static/keyboard.jpg">
        <FloatingPaper>
          <ContactForm />
        </FloatingPaper>
      </BackImage>
    </div>
    <style jsx>{`
      :global(.home-content) {
        padding: 0 0 0 ${sidebarWidth}px;
      }
    `}</style>
  </React.Fragment>
);
