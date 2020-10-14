import React, { FC } from 'react';
import { Meta } from '@storybook/react';

import Sidebar from '../components/Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Default: FC = () => <Sidebar />;
