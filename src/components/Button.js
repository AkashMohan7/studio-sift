import React from "react";
import './Button.css'


function Button(props) {
     return(
        <a className="button" href={props.link}>{props.text}</a>    
    );

}

export default Button