import React from 'react';
import './style.css';

function Button(props){
    return <button variant="contained" onClick={()=>props.route()}>{props.text}</button>
}
export default Button;