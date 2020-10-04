import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/atoms/Button';

export default {
  title: 'Atomics/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClicked' },
    onClick: { action: 'onClicked' },
  },
} as Meta;

export const Default: FC = () => (
  <Button handleClick={action('clicked')}>Button Text</Button>
);
