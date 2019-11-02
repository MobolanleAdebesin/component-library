import React, { Component } from 'react';
import {ReactComponent as Plus} from './Plus.svg';
import {ReactComponent as Minus} from './Minus.svg';
class  Form  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: this.props.value,
            max: this.props.max, 
            min: this.props.min,
            classList: this.props.checkmark,
            checked: this.props.checked,
            checkbox: " checked",
            checkbox2: "",
            checkboxBlack: " checked-black"
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.handleClickPlus = this.handleClickPlus.bind(this); 
        this.handleClickMinus = this.handleClickMinus.bind(this);
        this.handleCheck = this.handleCheck.bind(this); 
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
    handleCheck(evt){
        evt.preventDefault();
        if(this.state.checked == true && this.props.color == " black"){
            this.setState({checkboxBlack: ""});
            this.setState({checkbox2: " checked-black"});
            this.setState({checked: false});
        }
        else if(this.state.checked == false && this.props.color == " black"){
            this.setState({checkboxBlack: " checked-black"});
            this.setState({checkbox2: ""});
            this.setState({checked: true});
        }   

        if(this.state.checked == true && this.props.color == " blue"){
            this.setState({checkbox: ""});
            this.setState({checkbox2: " checked"});
            this.setState({checked: false});
        }
        else if(this.state.checked == false && this.props.color == " blue"){
            this.setState({checkbox: " checked"});
            this.setState({checkbox2: ""});
            this.setState({checked: true});
        }   
    }

    render(){
    console.log(this.state.checkmark);
        if(this.props.type == "checkbox"){
            if(this.props.checked){
                if(this.props.color == " blue"){
                    return(
                        <label className = "checkbox-container" htmlFor="">
                            <span className= {this.props.checkmark  + this.state.checkbox} onClick = {this.handleCheck}>
                            </span>
                            {this.props.label}
                        </label>
                    )
            }
            else if(this.props.color == " black"){
                return(
                    <label className = "checkbox-container" htmlFor="">
                        <span className= {this.props.checkmark  + this.state.checkboxBlack} onClick = {this.handleCheck}>
                        </span>
                        {this.props.label}
                    </label>
                )
            }
        }
            
            else if(this.props.checked == false){
                return(<label className = "checkbox-container"htmlFor="">
                        <span className= {this.props.checkmark + this.state.checkbox2} onClick = {this.handleCheck}>
                        </span>
                        {this.props.label}
                    </label>
                )
            }
        }
        else if(this.props.type == "button"){
            return(
        //     <form action="">
        //     <input type={this.props.type} value={this.props.minus} placeholder={this.props.placeholder} onClick = {this.handleClickMinus} />
        //     <span className="counter">{this.state.count}</span>
        //     <input type={this.props.type} value={this.props.plus} className={this.props.hidden} onClick = {this.handleClickPlus}/>
        // </form>
                <div className = "counter">
                    <Minus className = "plus" onClick = {this.handleClickMinus}></Minus>
                    {this.state.count}
                    <Plus className = "minus" onClick = {this.handleClickPlus}></Plus>
                </div>
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