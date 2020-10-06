import React from 'react';
import { NextPage } from 'next';

import BackImage from '@/components/BackImage';
import Sidebar from '@/components/Sidebar';
import FloatingPaper from '@/components/FloatingPaper';
import Document from '@/md/about.mdx';
import bgImg from '@/public/images/keyboard.jpg';

const AboutPage: NextPage = () => (
  <Sidebar>
    <BackImage image={bgImg}>
      <FloatingPaper>
        <Document />
      </FloatingPaper>
    </BackImage>
  </Sidebar>
);

export default AboutPage;
