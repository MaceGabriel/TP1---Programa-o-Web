import React from 'react'
import "./style.css"

export default function Footer(){
    return(
        <div className="footer">

            <div className="top">
                <div>
                    <h2>Contato:</h2>
                    <hr/>
                </div>
               
                <div>
                    <h4>Telefone: +55 31 3559-1692</h4>
                   <h4>Email: decom@ufop.edu.br</h4>
                </div>
            

            </div>

            <div className="bottom">
                <div>
                   <h4>Campus Universitário Morro do Cruzeiro | CEP 35400-00 | Ouro Preto - MG, Brasil</h4>
                </div>              
            </div>

        </div>

    )
}
