import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Tab from "../../components/tab";
import React from "react";

const  discents = [ 
    {title:"Anderson Almeida Ferreira",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:"Doutor em Ciência da Computação - Universidade Federal de Minas Gerais Instituto de Ciências Exatas e Biológicas - Sala 340"}, 
    // {title:"Andrea Gomes Campos Bianchi",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body={}},
    // {title:"Carlos Frederico M. C. Cavalcanti",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:}, 
    // {title:"Daniel Ludovico Guidoni",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Dayanne Gouveia Coelho",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:},
    // {title:"Eduardo José da Silva Luz",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Elton José da Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Fernanda Sumika Hojo de Souza",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:},
    // {title:"Fernando Cortez Sica",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Gladston Juliano Prates Moreira",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Guilherme Tavares de Assis",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Guillermo Cámara Chávez",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Gustavo Peixoto Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Jadson Castro Gertrudes",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"José Romildo Malaquias",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Joubert de Castro Lima",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Marcelo Luiz Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Marco Antonio Moreira de Carvalho",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Pedro Henrique Lopes Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Puca Huachi Vaz Penna",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Rafael Alves Bonfim de Queiroz",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Reinaldo Silva Fortes",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Ricardo Augusto Rabelo Oliveira",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Rodrigo César Pedrosa Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Rodrigo Geraldo Ribeiro",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Saul Emanuel Delabrida Silva",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Tiago Garcia de Senna Carneiro",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Túlio Ângelo Machado Toffolo",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    // {title:"Valéria de Carvalho Santos",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q=",body:},
    // {title:"Vander Luis de Souza Freitas",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:},
    //{title:"Vinicius Antonio de Oliveira Martins",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg",body:}/*
];

const  employees = [
    {title:"Cristiano Amaro da Matta",image:"https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118565150-stock-photo-young-male-teacher.jpg"},
    {title:"Viviane Michelline Veloso Danese",image:"https://media.istockphoto.com/id/687830554/photo/portrait-of-a-happy-latin-american-teacher-at-the-school.jpg?b=1&s=170667a&w=0&k=20&c=uNKFMoebdWk1fMYsAQicTvDARuMVibx4pskppByrh5Q="}
];

const  COCIC = [{title:"Hello"}, {title:"World"}, {title:"!!!!"}];

export default function People(){
    return (
        <>
        <Header />       
        <div><Tab
            title={"Pessoal"}
            tabs={[
                {name: "Discentes", content: discents},
                {name: "Funcionários", content: employees},
                {name: "COCIC", content: COCIC},
            ]}
        />
        </div>       
        <Footer/>
        </>
    );
}