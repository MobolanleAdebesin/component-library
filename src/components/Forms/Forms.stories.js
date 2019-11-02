import React from 'react';
import { storiesOf } from '@storybook/react';
import './Forms.css';
import Form from './Forms';
import arrowDown from './arrow down.png'

storiesOf('Forms', module)
.add('Submit Button', () => <Form type = "text" placeholder="Voucher Code" />)
.add('Counter', () => <Form type = "button" value= {0} plus="+" minus="-" max={10} min={0} step={2}counter  />)
.add('Email Button', () => <Form type = "text" label="Email" placeholder="Email" />)
.add('Select Button', () => <Form type= "select" hidden= "select"  special="select-css"/>)
.add('Checkbox Button Blue', () => <Form type="checkbox" checked= {true} label="Don't show this popup again" checkmark = "checkmark" />)
.add('Checkbox Button Black', () => <Form type="checkbox" checked= {false} label="Don't show this popup again" checkmark="checkmark"/>)
.add('Checkbox Button Black Text', () => <Form type="checkbox" checked= {false} label="Don't show this popup again" checkmark="checkmark"/>)
