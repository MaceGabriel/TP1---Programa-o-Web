import AboutSection from "../../components/about_section";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";

export default function About(){
    return (
        <>
        <Header />
        <Hero 
            cName="hero-mid"
            heroImg="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            title="Sobre o DECOM"
            text="Departamento e Chefes"
        />
        {/* <p>O Departamento de Computação (DECOM) da UFOP vem a cada ano aprimorando suas atividades de ensino e pesquisa em Computação, desde a sua criação em 1995. 
            <br/><br/>
            Esta base de informações apresenta diversos dados sobre nosso departamento, tais como o seu quadro de professores e técnicos, relação de alunos, cursos oferecidos, 
            infra-estrutura disponível, projetos de pesquisa, consultorias e projetos de de extensão.</p> */}
        <AboutSection/>
        <Footer/>
        </>
    );
}