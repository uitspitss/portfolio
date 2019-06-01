import React from 'react';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import Document from '../md/works.mdx';

export default () => (
  <Sidebar>
    <BackImage image="static/keyboard.jpg">
      <FloatingPaper>
        <Document />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);
