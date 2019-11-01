import React, { Component } from 'react';
import macbook from './Apple Macbook Pro.png';
import {ReactComponent as Stars} from './stars.svg'
import {ReactComponent as Price} from './price.svg'
import { ReactComponent as Hr} from './hr.svg'
class Thumbnail extends Component{
    constructor(props){
        super(props);
    
    }
    render(){
        return(
          <div className = "Thumbnail">
            <div className="Thumbnail-image">
                {/* <img src={macbook}/> */}
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
}
export default Thumbnail;
