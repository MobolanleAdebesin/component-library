import React from 'react';
import { storiesOf } from '@storybook/react';
import './Thumbnail.css';
import Thumbnail from './Thumbnail';

storiesOf('Thumbnail', module)
.add('Block Vertical', () => <Thumbnail/>)
.add('Block Vertical Blue', () => <Thumbnail/>)
.add('Block Horizontal', () => <Thumbnail/>)
.add('Headphones', () => <Thumbnail/>)
.add('Inline', () => <Thumbnail/>)