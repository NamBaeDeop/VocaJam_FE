import React, { useState } from "react";
import Header from "../default/Header";
import Footer from "../default/Footer";
import vocaMain, { Btn, H1, Main } from "../../css/vocaMain";
import VocaPage from "./VocaPage";

export default function Voca() {
  const [lang, setLang] = useState(null);

  return (
    <>
      <Header />
      {!lang && (
      <Main>
        <H1>언어를 선택해주세요</H1>
        <Btn>
          <button
            className="EN"
            onClick={(e) => {
              setLang(e.target.className);
            }}
          >
            영어
          </button>
          <button
            className="CN"
            onClick={(e) => {
              setLang(e.target.className);
            }}
          >
            중국어
          </button>
          <button
            className="JP"
            onClick={(e) => {
              setLang(e.target.className);
            }}
          >
            일본어
          </button>
        </Btn>
      </Main>
      )}
      {lang && <VocaPage lang={lang} />}
      <Footer />
    </>
  );
}