import React from 'react';
import { storiesOf } from '@storybook/react';
import './Thumbnail.css';
import Thumbnail from './Thumbnail';

storiesOf('Thumbnail', module)
.add('Block Vertical', () => <Thumbnail type="clear"/>)
.add('Block Vertical Blue', () => <Thumbnail type="blue" />)
.add('Block Horizontal', () => <Thumbnail type="horizontal"/>)
.add('Headphones', () => <Thumbnail type="headphones"/>)
.add('Inline', () => <Thumbnail type="inline"/>)