import Header from "../../components/header";
import Hero from "../../components/hero";

export default function Home(){
    return (
        <>
        <Header />
        <Hero 
            cName="hero"
            heroImg="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            title="Bem-Vindo ao DECOM"
            text="O melhor curso da UFOP"
        />
        </>
    );
}