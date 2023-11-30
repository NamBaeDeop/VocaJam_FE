import React from "react";
import Header from '../default/Header'
import Footer from '../default/Footer';
import VocaCard from "../VocaCard/VocaCard";
import Main from "../../css/Vocapage";

export default function VocaPage(){

    return (
        <>
            <Header/>
            <Main>
                <h1>일본어</h1>
                <VocaCard />
            </Main>
            <Footer/>
        </>
    )
}