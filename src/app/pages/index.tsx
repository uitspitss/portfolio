import React from 'react';
import { NextPage } from 'next';

import Hero from '@/components/Hero';
import Keyboard from '@/components/Keyboard';
import Sidebar from '@/components/Sidebar';

const IndexPage: NextPage = () => (
  <Sidebar>
    <Hero />
    <Keyboard />
  </Sidebar>
);

export default IndexPage;
