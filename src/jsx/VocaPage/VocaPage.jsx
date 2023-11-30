import React from "react";
// import { useState, useEffect } from "react";
// import '../../css/vocaModal.css';
import VocaCard from "../VocaCard/VocaCard";
import '../../css/vocaPage.css';

export default function VocaPage(){

    return (
        <>
            <section>
                <h1>일본어</h1>
                <VocaCard />
                {/* map으로 반복 */}
            </section>
        </>
    )
}