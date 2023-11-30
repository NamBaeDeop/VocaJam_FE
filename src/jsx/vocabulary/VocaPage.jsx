import React from "react";
// import { useState, useEffect } from "react";

import Header from '../default/Header'
import Footer from '../default/Footer';
import VocaCard from "../vocabulary/VocaCard";
import Main from "../../css/Vocapage";

export default function VocaPage(){
    // const [lang, setLang] = useState("EN");


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