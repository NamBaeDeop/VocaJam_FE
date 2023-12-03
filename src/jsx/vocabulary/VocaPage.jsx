import React from "react";
// import { useState, useEffect } from "react";

// import Header from '../default/Header'
// import Footer from '../default/Footer';
import VocaCard from "../vocabulary/VocaCard";
import {Main, GotoAdd, TitleBtnWrap} from "../../css/Vocapage";

export default function VocaPage({lang}){
  console.log(lang, "VocaPage");

    return (
        <>
            {/* <Header/> */}
            <Main>
                <TitleBtnWrap>
                    {lang === "EN" && <h1>영어</h1>}
                    {lang === "CN" && <h1>중국어</h1>}
                    {lang === "JP" && <h1>일본어</h1>}
                    <GotoAdd>+</GotoAdd>
                </TitleBtnWrap>    
                <VocaCard lang={lang}/>
            </Main>
            {/* <Footer/> */}
        </>
    )
}