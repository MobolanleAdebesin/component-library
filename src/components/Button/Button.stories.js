import React from 'react';
import { storiesOf } from '@storybook/react';
import './Button.css';
import Button from './Button';
import cart from './cart.svg';
import heart from './hearts.svg';


storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" type ="primary" />)
    .add('Danger', () => <Button label= "Danger" type = 'danger'/>)
    .add('Warning', () => <Button label="Warning" type = 'warning' />)
    .add('Success', () => <Button label="Success" type = 'success'/>)
    .add('Default', () => <Button label = "Default" type = 'default'/>  )

    .add('Primary Light', () => <Button label="Primary Light" type ="primary-light" />)
    .add('Danger Light', () => <Button label= "Danger Light" type = 'danger-light'/>)
    .add('Warning Light', () => <Button label="Warning Light" type = 'warning-light' />)
    .add('Success Light', () => <Button label="Success Light" type = 'success-light'/>)
    .add('Default Light', () => <Button label = "Default Light" type = 'default-light'/>  )

    .add('Outline Primary Button', () => <Button label= "Outline Primary" type= "primary" outline />)
    .add('Outline Danger Button', ()=> <Button label= "Outline Danger" type= "danger" outline />)
    .add('Outline Warning Button', ()=> <Button label= "Outline Warning" type= "warning" outline />)
    .add('Outline Success Button', ()=> <Button label= "Outline Success" type= "success" outline />)
    .add('Outline Default Button', () => <Button label= "Outline Default" type= "default" outline/>)
    
    .add('Large Primary Button', () => <Button label = "Large Primary" type="primary" large />)
    .add('Large Danger Button', () => <Button label = "Large Danger" type="danger" large />)
    .add('Large Warning Button', () => <Button label = "Large Warning" type="warning" large />)
    .add('Large Success Button', () => <Button label = "Large Success" type="success" large />)
    .add('Large Default Button', () => <Button label = "Large Default" type="default" large/>)

    .add('Large Primary Light Button', () => <Button  label = "Large Primary Light" type="primary-light" large/>)
    .add('Large Danger Light Button' , () => <Button  label ="Large Danger Light" type="danger-light" large/>)
    .add('Large Warning Light Button', () => <Button  label = "Large Warning Light" type="warning-light" large/>)
    .add('Large Success Light Button', () => <Button  label = "Large Success Light" type="success-light" large/>)
    .add('Large Default Light Button', () => <Button  label = "Large Default Light" type="default-light" large/>)

    .add('Outline Large Primary Button', () => <Button label= "Outline Primary" type= "primary" outline large/>)
    .add('Outline Large Danger Button', ()=> <Button label= "Outline Danger" type= "danger" outline  large />)
    .add('Outline Large Warning Button', ()=> <Button label= "Outline Warning" type= "warning" outline large />)
    .add('Outline Large Success Button', ()=> <Button label= "Outline Success" type= "success" outline large />)
    .add('Outline Large Default Button', () => <Button label= "Outline Default" type= "default" outline large/>)

    .add("Cart Icon Button Text", () => <Button label="Add To Cart" type="primary-light" icon={cart}/>)
    .add("Heart Icon Button Text", () => <Button label="Add To Favorites" type="primary-light" icon={heart}/>)
    .add('Cart Icon Button', () => <Button  type="primary-light" icon={cart}/>)
    .add('Heart Icon Button', () => <Button  type="primary-light" icon={heart}/>)
    
