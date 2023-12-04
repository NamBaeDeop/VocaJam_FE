import React from "react";
import { useState } from "react";

import VocaCard from "../vocabulary/VocaCard";
import {Main, GotoAdd, TitleBtnWrap} from "../../css/Vocapage";
import Add from "./Add";

export default function VocaPage({lang}){
    console.log(lang, "VocaPage");
    const [clicked, setClicked] = useState();    
    const [editMode, setEditMode] = useState(false);
        // console.log(setEditMode);
    return (
        <>
        {!clicked && (
            <Main className="remove">
                <div className="TitleBtnWrap">
                    {lang === "EN" && <h1>영어</h1>}
                    {lang === "CN" && <h1>중국어</h1>}
                    {lang === "JP" && <h1>일본어</h1>}
                    <div className="GotoAdd" onClick={()=>{
                        setClicked(true);
                    }}>+</div>
                </div>    
                <VocaCard lang={lang}  editMode={editMode} setEditMode={setEditMode} />
            </Main>
        )}
            {clicked && <Add lang={lang}/>}
        </>
    )
}