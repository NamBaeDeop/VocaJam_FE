import React from "react";
import { useState } from "react";

import VocaCard from "../vocabulary/VocaCard";
import Main from "../../css/Vocapage";
import Add from "./Add";
import Edit from "./Edit";

<<<<<<< HEAD
export default function VocaPage({lang}){
    // console.log(lang, "VocaPage");
    const [clicked, setClicked] = useState();    
    const [editMode, setEditMode] = useState(false);
        // console.log(setEditMode);
    return (
        <>
        {!clicked && (
            <Main>
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
=======
export default function VocaPage(props) {
  const [clicked, setClicked] = useState();
  return (
    <>
      {!clicked && (
        <Main
          // className={`${props.editMode ? "remove " : ""} ${
          //   props.pop ? "" : "remove"
          // }`}
          className={`${props.editMode ? "remove" : ""} ${
            props.pop ? "" : "remove"
          }`}
        >
          <div className="TitleBtnWrap">
            {/* {props.lang === "EN" && <h1>영어</h1>}
            {props.lang === "CN" && <h1>중국어</h1>}
            {props.lang === "JP" && <h1>일본어</h1>} */}
            <div
              className="GotoAdd"
              onClick={() => {
                setClicked(true);
              }}
            >
              +
            </div>
          </div>
          <VocaCard
            lang={props.lang}
            editMode={props.editMode}
            setEditMode={props.setEditMode}
            modalWord={props.modalWord}
            setModalWord={props.setModalWord}
          />
        </Main>
      )}
      {clicked && <Add lang={props.lang} />}
    </>
  );
}
>>>>>>> 93aae799c871d15e3e0fc432f9668cbebf85b6de
