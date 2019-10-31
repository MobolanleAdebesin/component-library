import React from 'react';
const Form = (props) =>{
    let classList = " "
    if(props.medium){
        classList = " medium-form"
    }
    if(props.large){
        classList = " large-form";
    }
    
    return (
    <label>
        {props.label }
        <br></br><input className = {classList} type ={props.type} placeholder = {props.placeholder} /> 
    </label>
    )
}

export default Form;