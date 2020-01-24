import React from 'react';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import Document from '../md/about.mdx';

const About = () => (
  <Sidebar>
    <BackImage image="/images/keyboard.jpg">
      <FloatingPaper>
        <Document />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);

export default About;
