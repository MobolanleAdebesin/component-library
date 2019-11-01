import React, { Component } from 'react';



// This is a functional component - just sent up a little differently as an arrow function!
class  Form  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: this.props.value,
            max: this.props.max, 
            min: this.props.min, 
            color: "papaya"
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.handleClickPlus = this.handleClickPlus.bind(this); 
        this.handleClickMinus = this.handleClickMinus.bind(this);
        this.handleCeck = this.handleCheck.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
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

    handleCheck(){
        if (this.state.checked === false) {
            this.setState({checked: true})
            console.log(this.state.checked)
        } else {
            this.setState({checked: false})
            console.log(this.state.checked)
        }
    }
    changeBackground(evt){
        evt.preventDefault();
        let classList = "checkmark-blue";
        return classList += " checkmark-blue papaya";
    }


    render(){
    
        if(this.props.type == "checkbox"){

            
            return(
                <div>
                   
                </div>
                
            )
        }
        
        else if(this.props.type == "button"){
            return(
            <form action="">
            <input type={this.props.type} value={this.props.minus} placeholder={this.props.placeholder} onClick = {this.handleClickMinus} />
            <span className="counter">{this.state.count}</span>
            <input type={this.props.type} value={this.props.plus} className={this.props.hidden} onClick = {this.handleClickPlus}/>
        </form>
            )
        }
        else if(this.props.type == "text" && this.props.placeholder == "Voucher Code"){
            return(
            <form action="">
                    <input type={this.props.type} placeholder="Voucher Code"/>
                    <input className ="redeem"value="Redeem Code"type="submit"/>
                </form>
                )
        }

        else if(this.props.type == "text"){
            return(
                <form action="">
                    <label htmlFor="">{this.props.label}</label>
                    <input type={this.props.type} placeholder={this.props.placeholder}/>
                    
                </form>
            )
        }
        else if(this.props.type == "select"){
            return(
                <form action="">
                    <select name = {this.props.name} className = {this.props.special} id="">
                        <option value="">Select</option>
                    </select>
                </form>
            )
        }
    
}
}
export default Form;
