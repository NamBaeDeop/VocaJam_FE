import React from "react";
import VocaCard from "../VocaCard/VocaCard";
import Main from "../../css/Vocapage";

export default function VocaPage(){

    return (
        <>
            <Main>
                <h1>일본어</h1>
                <VocaCard />
                {/* map으로 반복 */}
            </Main>
        </>
    )
}