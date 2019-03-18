import * as React from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';

const sidebarWidth = 150;

const Home = () => (
  <React.Fragment>
    <Sidebar />
    <div className="home-content">
      <Hero />
    </div>
    <style jsx>{`
      :global(.home-content) {
        padding: 0 0 0 ${sidebarWidth}px;
      }
    `}</style>
  </React.Fragment>
);

export default Home;
