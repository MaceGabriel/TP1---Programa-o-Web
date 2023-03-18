import React from 'react'
import "./style.css"

export default function AboutSection(){
    return(
        <div className="about-container">

            <h1> O Departamento </h1>
            <hr/>
            <p>O Departamento de Computação (DECOM) da UFOP vem a cada ano aprimorando suas atividades de ensino e pesquisa em Computação, desde a sua criação em 1995. 
            <br/><br/>
            Esta base de informações apresenta diversos dados sobre nosso departamento, tais como o seu quadro de professores e técnicos, relação de alunos, cursos oferecidos, 
            infra-estrutura disponível, projetos de pesquisa, consultorias e projetos de de extensão.</p>

            {/* Depois transfomar isso aqui em um componente */}
            <h2> Chefia do Departamento </h2>
            <hr/>
            <h4>Prof. Dr. Carlos Frederico Marcelo da Cunha Cavalcanti</h4>
            <br/><br/>

            <h4> Secretaria: </h4>  
            <h4>Viviane Michelline Veloso Danese</h4>
            <br/><br/>

            <h2> Coordenação de Graduação </h2>          
            <hr/>
            <h4>Prof. Dr. Rodrigo César Pedrosa Silva</h4>
            <br/><br/>

            <h4> Secretaria: </h4>
            <h4>Fernando Jose Teixeira de Freitas</h4>
            <br/><br/>

            <h2> Coordenação de Pós-graduação </h2>
            <hr/>
            <h4>Prof. Dr. Puca Huachi Vaz Penna</h4>
            <br/><br/>

            <h4> Secretaria: </h4>
            <h4>Mariana Ferreira Lanna</h4>

        </div>

    )
}

