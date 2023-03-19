import React from 'react';
import './style.css';
import { useState } from "react";

export default function Modal({id = "modal", onClose = ()=>{}, children}){

    const handleOutsideClick = (e) => {
        if(e.target.id === id){
            onClose();
        }
    }
    return(
        <div id="modal" className="modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
            </div>
        </div>    
    )
}