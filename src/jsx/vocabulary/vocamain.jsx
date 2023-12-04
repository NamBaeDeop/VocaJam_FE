import React, { useState } from "react";
import VocaPage from "./VocaPage";
import Main from "../../css/VocaMain";

export default function VocaMain() {
  const [lang, setLang] = useState(null);

  return (
    <>
      {!lang && (
        <Main className="Main">
          <h1>언어를 선택해주세요</h1>
          <div className="btnBox">
            <button
              className="en"
              onClick={(e) => {
                setLang(e.target.className);
              }}
            >
              영어
            </button>
            <button
              className="cn"
              onClick={(e) => {
                setLang(e.target.className);
              }}
            >
              중국어
            </button>
            <button
              className="jp"
              onClick={(e) => {
                setLang(e.target.className);
              }}
            >
              일본어
            </button>
          </div>
        </Main>
      )}
      {lang && <VocaPage lang={lang} />}
    </>
  );
}
