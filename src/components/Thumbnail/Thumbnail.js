import React, { Component } from 'react';
import "./Thumbnail.css";
import macbook from './Images/Apple Macbook Pro.png';
import {ReactComponent as Macbook} from './Images/laptop.svg'
import {ReactComponent as Stars} from './Images/stars.svg'
import {ReactComponent as Price} from './Images/price.svg'
import { ReactComponent as Hr} from './Images/hr.svg'
import{ReactComponent as Label} from './Images/label.svg'
import '../Button/Button.css';
import Button from '../Button/Button.js';
import cart from '../Button/cart.svg';
import heart from '../Button/hearts.svg';

class Thumbnail extends Component{
    constructor(props){
        super(props);
    
    }
    render(){
      if(this.props.type == "blue"){
        return(
          <div className = "Thumbnail-blue">
            <div className="Thumbnail-image-blue">
            </div>
      
            <Hr className = "Thumbnail-hr"></Hr>

            <div className="Thumbnail-Text">
                    <p className="Thumbnail-Paragraph">Apple Macbook Pro</p>
                    <Stars className = "Thumbnail-stars"></Stars>
                    <br/>
                    <Price className = "Thumbnail-price"></Price>    
            </div>  
          </div>
        )

      }
      if(this.props.type == "clear"){
        return(
          <div className = "Thumbnail">
          <div className="Thumbnail-image">
          </div>
    
          <Hr className = "Thumbnail-hr"></Hr>

          <div className="Thumbnail-Text">
                  <p className="Thumbnail-Paragraph">Apple Macbook Pro</p>
                  <Stars className = "Thumbnail-stars"></Stars>
                  <br/>
                  <Price className = "Thumbnail-price"></Price>    
          </div>  
        </div>
        )
      }
      if(this.props.type == "horizontal"){
        return(
          <div className = "Thumbnail-horizontal">
          <div className="Thumbnail-image-horizontal">
          </div>

          <div className="Thumbnail-Text-horizontal">
                  <p className="Thumbnail-Paragraph">Apple Macbook Pro</p>
                  <Stars className = "Thumbnail-stars-horizontal"></Stars>
                  <br/>
                  <Price className = "Thumbnail-price-horizontal"></Price>    
          </div>  
        </div>
        )
        
      }
      if(this.props.type == "headphones"){
        return(
          <div className = "Thumbnail-headphones">
          <div className="Thumbnail-image-headphones">
          </div>

          <div className="Thumbnail-Text">
                  <p className="Thumbnail-Paragraph">Beats Solo 2 On Ear Headphones Black</p>
                  <Stars className = "Thumbnail-stars"></Stars>
                  <br/>
                  <Price className = "Thumbnail-price"></Price>    
          </div>  
        </div>
        )
        
      }
      if(this.props.type == "inline"){
        return(
          <div className = "Thumbnail-inline">
            
            <div className= "hot-container">
            <Label className="hot"></Label>
            <div className="Thumbnail-image-inline"></div>
            </div>
            

          <div className="Thumbnail-Text-inline">
            <div className="paragraph-container">
            <p className="Thumbnail-Paragraph-inline">Beats Solo 2 On Ear Headphones - Black</p>
            </div>
            
            <div className="product-info-container">
              <div className="review-container">
                <Stars className = "Thumbnail-stars-inline"></Stars>
                <p className= "reviews"> 0 reviews</p>
                <a href="" className = "link">Submit a Review</a>
              </div>
                  
            <br/>

            <div className="price-container-inline">
              <Price className = "Thumbnail-price-inline"></Price>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates similique dolor commodi recusandae ducimus ratione dolore in cumque ab assumenda sint quaerat, voluptate vel atque, alias porro magnam quisquam!</p>
             <div className="Thumbnail-buttons">
               <Button className = "cart"label="Add To Cart" type="primary-light" icon={cart}/> 
               <Button  className = "heart"type="primary-light" icon={heart}/>

             </div>
            </div>
          </div>
                   
          </div>  
        </div>
        )

      }

        
    }
}
export default Thumbnail;
