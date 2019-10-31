import React from 'react';
import { storiesOf } from '@storybook/react';
import './Forms.css';
import Form from './Forms';
import arrowDown from './arrow down.png'

storiesOf('Forms', module)
.add('Submit Button', () => <Form type = "text" placeholder="Voucher Code" />)
.add('Counter', () => <Form type = "button" value= {2} plus="+" minus="-" max={10} min={0}counter/>)
.add('Select Button', () => <Form type = "text" label="Email" placeholder="Email"/>)
