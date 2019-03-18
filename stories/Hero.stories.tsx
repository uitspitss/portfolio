import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from '../components/Hero';

const stories = storiesOf('Components', module);

stories.add('Hero', () => <Hero />);
