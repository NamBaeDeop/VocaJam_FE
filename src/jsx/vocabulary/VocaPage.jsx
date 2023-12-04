import React from "react";
import { useState } from "react";

import VocaCard from "../vocabulary/VocaCard";
import Main from "../../css/Vocapage";
import Add from "./Add";
import Edit from "./Edit";

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
