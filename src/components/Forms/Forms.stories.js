import React from 'react';
import { storiesOf } from '@storybook/react';
import './Forms.css';
import Form from './Forms';


storiesOf('Forms', module)
.add('Submit Button', () => <Form type = "text" placeholder="Voucher Code" buttonText = "Redeem" />)
.add('Submit Button Large', () => <Form type = "text" placeholder="Voucher Code" buttonText = "Redeem" large="large" />)

.add('Counter', () => <Form type = "button" value= {0} plus="+" minus="-" max={10} min={0} step={2}counter  />)

.add('Email', () => <Form type = "text" label="Email" placeholder="Email" reg />)
.add('Email Medium', () => <Form type="text" label="Email" placeholder="Email" medium/>)
.add('Email Large', () => <Form type="text" label="Email" placeholder="Email" large/>)


.add('Select', () => <Form type= "select"  special="select-css" reg/>)
.add('Select Medium', () => <Form type= "select"  special="select-css" medium />)
.add('Select Large', () => <Form type= "select"  special="select-css" large />)
.add('Select Gray', () => <Form type= "select"  special="select-css" gray reg />)
.add('Select Gray Medium', () => <Form type= "select"  special="select-css" gray medium />)
.add('Select Gray Large', () => <Form type= "select"  special="select-css" gray large />)

.add('Checkbox Button Blue', () => <Form type="checkbox" checked= {true} label="" checkmark = "checkmark-blue" color=" blue"/>)
.add('Checkbox Button Black', () => <Form type="checkbox" checked= {true} label="" checkmark="checkmark-black" color=" black"/>)
.add('Checkbox Button Black Text', () => <Form type="checkbox" checked= {true} label="Don't show this popup again" checkmark="checkmark-black" color=" black"/>)
