import React from 'react';
import Typography from '@material-ui/core/Typography';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import Document from '../md/about.mdx';

export default () => (
  <Sidebar>
    <BackImage image="static/keyboard.jpg">
      <FloatingPaper>
        <Document />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);
