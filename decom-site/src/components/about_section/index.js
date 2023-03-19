import React from 'react';
import Information from "../information_teacher";
import "./style.css"

const departamentPositions = [
    {departamentPosition:" Chefia do Departamento", nameTeacher:"Prof. Dr. Carlos Frederico Marcelo da Cunha Cavalcanti", emailTeacher:"chefia.decom@ufop.edu.br", mandate:"até 02 de Janeiro de 2024", secretaryName:"Viviane Michelline Veloso Danese", emailSecretary:"decom@ufop.edu.br", telSecretary:"+55 (31) 3559-1692"},
    {departamentPosition:"Coordenação de Graduação", nameTeacher:"Prof. Dr. Rodrigo César Pedrosa Silva", emailTeacher:"rodrigo.silva@ufop.edu.br", mandate:"até 16 Agosto de 2023", secretaryName:"Fernando Jose Teixeira de Freitas", emailSecretary:" cocic@ufop.edu.br", telSecretary:"+55 (31) 3559-1312"},
    {departamentPosition:"Coordenação de Pós-graduação", nameTeacher:"Prof. Dr. Puca Huachi Vaz Penna", emailTeacher:"coordenacao.ppgcc@ufop.edu.br", mandate:"até 10 de Dezembro de 2021", secretaryName:"Mariana Ferreira Lanna", emailSecretary:"secretaria.ppgcc@ufop.edu.br", telSecretary:" +55 (31) 3559-1641"}
];

export default function AboutSection(){
    return(
        <div className="about-container">

            <h1> O Departamento </h1>
            <hr/>
            <p>O Departamento de Computação (DECOM) da UFOP vem a cada ano aprimorando suas atividades de ensino e pesquisa em Computação, desde a sua criação em 1995. 
            <br/><br/>
            Esta base de informações apresenta diversos dados sobre nosso departamento, tais como o seu quadro de professores e técnicos, relação de alunos, cursos oferecidos, 
            infra-estrutura disponível, projetos de pesquisa, consultorias e projetos de de extensão.</p>

            {departamentPositions.map((positions) => (
                <Information key={positions.nameTeacher} departamentPosition={positions.departamentPosition} nameTeacher={positions.nameTeacher} emailTeacher={positions.emailTeacher} mandate={positions.mandate} secretaryName={positions.secretaryName} emailSecretary={positions.emailSecretary} telSecretary={positions.telSecretary}/>
            ))}

        </div>

    )
}

