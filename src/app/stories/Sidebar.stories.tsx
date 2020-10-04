import React, { FC } from 'react';
import { Meta } from '@storybook/react';

import Sidebar from '../components/Sidebar';

export default {
  title: 'Components/Sidebar',
} as Meta;

export const Default: FC = () => <Sidebar />;
