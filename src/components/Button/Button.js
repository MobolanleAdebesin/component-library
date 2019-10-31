import React from 'react';


// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'default', 'primary-light', 'danger-light', 'success-light', 'warning-light', 'default-light']
    if(types.includes(props.type)){
        classList += ` button-${props.type}`
    }
    if(props.large){
        classList += ` button-large`
    }
    if(props.outline){
        classList += ' button-outline'
        classList += ` border-${props.type}`
    }
    if(props.icon && !props.label){
        classList += ' icon-solo'
    }
    if(props.icon && props.label){
        classList += ' icon'
    }
    
    return <button className = {classList}>
       <img className = "symbol" src={props.icon}/>  {props.label}
    </button>
}

export default Button;