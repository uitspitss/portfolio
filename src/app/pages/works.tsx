import React from 'react';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import Document from '../md/works.mdx';

const Works = () => (
  <Sidebar>
    <BackImage image="keyboard.jpg">
      <FloatingPaper>
        <Document />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);

export default Works;
