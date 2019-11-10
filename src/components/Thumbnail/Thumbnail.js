import React, { Component } from 'react';
import "./Thumbnail.css";
import macbook from './Images/Apple Macbook Pro.png';
import {ReactComponent as Macbook} from './Images/laptop.svg'
import {ReactComponent as Stars} from './Images/stars.svg'
import {ReactComponent as Price} from './Images/price.svg'
import { ReactComponent as Hr} from './Images/hr.svg'

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

        
    }
}
export default Thumbnail;
