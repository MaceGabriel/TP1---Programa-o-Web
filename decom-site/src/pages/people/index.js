import Footer from "../../components/footer";
import Header from "../../components/header";
import Tab from "../../components/tab";
import React from "react";

// const body =[{cardInfo1:}];
const  discents = [ 
    {title:"Anderson Almeida Ferreira",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:{role:"Doutor em Ciência da Computação - Universidade Federal de Minas Gerais", classroom:"Instituto de Ciências Exatas e Biológicas - Sala 340", email:"cfmcc@iceb.ufop.br", lattes:"http://lattes.cnpq.br/7884364909927473", areaInterest:"Teoria da Computação. Bibliotecas Digitais. Bancos de Dados. Gerência de Dados. Recuperação de Informação. Aprendizado de Máquina", tel:" "}}, 
    {title:"Andrea Gomes Campos Bianchi",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:{role:"Doutora em Física Computacional - Universidade de São Paulo/São Carlos", classroom:"Instituto de Ciências Exatas e Biológicas - Sala 64", email:"andrea@iceb.ufop.br", lattes:"http://lattes.cnpq.br/0251364589832974", areaInterest:"Visão Computacional. Análise e processamento de imagens. Simulação computacional. Reconhecimento de padrões.", tel:"+55 (31) 3559 1640"}},
    {title:"Carlos Frederico M. C. Cavalcanti",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"}, 
    {title:"Daniel Ludovico Guidoni",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Dayanne Gouveia Coelho",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:"XXXX"},
    {title:"Eduardo José da Silva Luz",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Elton José da Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Fernanda Sumika Hojo de Souza",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:"XXXX"},
    {title:"Fernando Cortez Sica",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Gladston Juliano Prates Moreira",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Guilherme Tavares de Assis",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Guillermo Cámara Chávez",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Gustavo Peixoto Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Jadson Castro Gertrudes",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"José Romildo Malaquias",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Joubert de Castro Lima",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Marcelo Luiz Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Marco Antonio Moreira de Carvalho",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Pedro Henrique Lopes Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Puca Huachi Vaz Penna",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Rafael Alves Bonfim de Queiroz",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Reinaldo Silva Fortes",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Ricardo Augusto Rabelo Oliveira",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Rodrigo César Pedrosa Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Rodrigo Geraldo Ribeiro",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Saul Emanuel Delabrida Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Tiago Garcia de Senna Carneiro",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Túlio Ângelo Machado Toffolo",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Valéria de Carvalho Santos",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:"XXXX"},
    {title:"Vander Luis de Souza Freitas",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"},
    {title:"Vinicius Antonio de Oliveira Martins",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"XXXX"}
];

const  employees = [
    {title:"Cristiano Amaro da Matta",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg"},
    {title:"Viviane Michelline Veloso Danese",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q="}
];

const  CACIC = [{title:"Hello"}, {title:"World"}, {title:"!!!!"}];

export default function People(){
    return (
        <>
        <Header />       
        <div><Tab
            title={"Pessoal"}
            tabs={[
                {name: "Discentes", content: discents},
                {name: "Funcionários", content: employees},
                {name: "CACIC", content: CACIC},
            ]}
        />
        </div>       
        <Footer/>
        </>
    );
}