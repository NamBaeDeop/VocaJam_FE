import React from "react";
// import { useState, useEffect } from "react";

import Header from '../default/Header'
import Footer from '../default/Footer';
import VocaCard from "../vocabulary/VocaCard";
import Main from "../../css/Vocapage";

export default function VocaPage({lang}){
  console.log(lang, "VocaPage");

    return (
        <>
            <Header/>
            <Main>
                <h1>{lang === "English" ? <span>영어</span> : null }</h1>
                <h1>{lang === "Chinese" ? <span>중국어</span> : null}</h1>
                <h1>{lang === "Japanese" ? <span>일본어</span> : null}</h1>
                <VocaCard lang={lang}/>
            </Main>
            <Footer/>
        </>
    )
}