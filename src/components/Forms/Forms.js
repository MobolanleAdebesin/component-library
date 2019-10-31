import React, { Component } from 'react';


// This is a functional component - just sent up a little differently as an arrow function!
class  Form  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: this.props.value,
            max: this.props.max, 
            min: this.props.min
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.handleClickPlus = this.handleClickPlus.bind(this); 
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }
    increaseCount(currentValue){
        return {count: currentValue.count + this.props.step}
    }

    decreaseCount(currentValue){
        return {count: currentValue.count - this.props.step}
    }
    
    handleClickPlus(){
        if(this.state.count < this.state.max){
            this.setState(this.increaseCount)
        }
    }

    handleClickMinus(){
        if(this.state.count > this.state.min){
            this.setState(this.decreaseCount) 
        }     
    }

    render(){
        let classList = " "
        if(this.props.counter){
            classList += " counter"
        }
       

    return (
    <form action="">
        <label htmlFor="">{this.props.label}</label>
        <input type={this.props.type} value={this.props.minus} placeholder={this.props.placeholder} onClick = {this.handleClickMinus} />
        <span className="counter">{this.state.count}</span>
        <input type={this.props.type} value={this.props.plus} className={this.props.hidden}onClick = {this.handleClickPlus}/>
    </form>
    )
}
}
export default Form;
