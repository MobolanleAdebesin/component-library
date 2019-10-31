import React from 'react';
import { storiesOf } from '@storybook/react';
import './Forms.css';
import Form from './Forms';
import arrowDown from './arrow down.png'

storiesOf('Forms', module)
.add('Submit Button', () => <Form type = "text" placeholder="Voucher Code" hidden= "submit"/>)
.add('Counter', () => <Form type = "button" value= {0} plus="+" minus="-" max={10} min={0} step={5}counter hidden="increment" />)
.add('Email Button', () => <Form type = "text" label="Email" placeholder="Email" hidden="email" />)
.add('Select Button', () => <Form type= "select" hidden= "select" name="Select" hidden = "select" special="select-css"/>)
