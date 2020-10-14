import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import FloatingPaper from '../components/FloatingPaper';

export default {
  title: 'Components/FloatingPaper',
  component: FloatingPaper,
  decorators: [withKnobs],
} as Meta;

export const Default: FC = () => <FloatingPaper />;
export const WithText: FC = () => (
  <FloatingPaper>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iusto
    dolorum sit laboriosam iste autem consequatur. Itaque laboriosam sequi nobis
    reprehenderit, pariatur dignissimos totam tenetur autem minus delectus
    incidunt velit.
  </FloatingPaper>
);
export const WithInputtedText: FC = () => (
  <FloatingPaper>{text('text', 'Inputted text')}</FloatingPaper>
);
