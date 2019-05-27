import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';

interface FloatingPaperProps {
  children: React.Node;
}

const FloatingPaper: FC<FloatingPaperProps> = ({ children }) => (
  <React.Fragment>
    <Paper className="floating-paper">{children}</Paper>
    <style jsx>
      {`
        :global(.floating-paper) {
          width: 60vw;
          padding: 20px 50px;
          background: rgba(255, 255, 255, 0.9);
        }
      `}
    </style>
  </React.Fragment>
);

export default FloatingPaper;
