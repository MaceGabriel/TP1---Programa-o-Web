import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Tab from "../../components/tab";
import React from "react";

const  a= ["Hello", "World", "!!!!"];
export default function People(){
    return (
        <>
        <Header />       
        <div><Tab
            title={"Pessoal"}
            tabs={[
                {name: "Discentes", content: a},
                {name: "Funcionários", content: ["a", "b", "c"]},
                {name: "COCIC", content: ["Alo","Mundo","!!!"]},
            ]}
        />
        </div>
        <Card/>
        <Footer/>
        </>
    );
}