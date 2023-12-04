import React from "react";
import { useState } from "react";
import VocaCard from "../vocabulary/VocaCard";
import { Main, GotoAdd, TitleBtnWrap } from "../../css/Vocapage";
import Add from "./Add";
import Edit from "./Edit";
import { EditForm, Word } from "../../css/vocaEdit";

export default function VocaPage({ lang }) {
  console.log(lang, "VocaPage");
  const [clicked, setClicked] = useState();

  return (
    <>
      {!clicked && (
        <Main>
          <TitleBtnWrap>
            {lang === "EN" && <h1>영어</h1>}
            {lang === "CN" && <h1>중국어</h1>}
            {lang === "JP" && <h1>일본어</h1>}
            <GotoAdd
              onClick={() => {
                setClicked(true);
              }}
            >
              +
            </GotoAdd>
          </TitleBtnWrap>
          <VocaCard lang={lang} />
        </Main>
      )}
      {clicked && <Add lang={lang} />}
    </>
  );
}
