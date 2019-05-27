import React from 'react';

import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';

const sidebarWidth = 150;

export default () => (
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
