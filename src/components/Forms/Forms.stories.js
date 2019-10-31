import React from 'react';
import { storiesOf } from '@storybook/react';
import './Forms.css';
import Form from './Forms';

storiesOf('Forms', module)
.add('Small Text Input', () => <Form label ="Email" placeholder="Email" type="text"/>)
.add('Medium Text Input', () => <Form label ="Email" placeholder="Email" type="text" medium/>)
.add('Large Text Forms', () => <Form label ="Email" placeholder="Email" type="text" large />)