import React from 'react';
import NavBar from '../navbar/';
import './style.css';

export default function Information({departamentPosition, nameTeacher, emailTeacher, mandate, secretaryName, emailSecretary, telSecretary}){
    return (
        <div className="information">
            <h2> {departamentPosition} </h2>
            <hr/>
            <h4>{nameTeacher}</h4>
            <p className="email">Email: {emailTeacher}</p>            
            <p className="mandate">Mandato: {mandate}</p>

            <h4 className="secretaria"> Secretaria: </h4>  
            <h4>{secretaryName}</h4>
            <p className="email-secretaria">E-mail: {emailSecretary}</p>            
            <p className="tel-secretaria">Tel: {telSecretary}</p>
            
        </div> 
    )
}