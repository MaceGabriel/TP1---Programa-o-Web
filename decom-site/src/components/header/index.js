import React from 'react';
import Button from '../button';
import './style.css';

function onClicou(){
    console.log("Clicou");
}

function NavBar(){
    return <nav>
        Decom
        <Button text="botão" route={onClicou}/>
    </nav>;
}
export default NavBar;