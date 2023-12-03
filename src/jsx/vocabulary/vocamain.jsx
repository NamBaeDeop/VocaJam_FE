import React, { useState } from "react";
import VocaPage from "./VocaPage";

export default function Voca() {
  const [lang, setLang] = useState('English');;
  
  return (
    <>
        <div className="content">
          <p className="h1">언어를 선택해주세요</p>
          <div className="btn">
              <button
                className="English"
                onClick={(e) => {
                  setLang(e.target.className);
                }}
              >
                영어
              </button>
            <button
              className="Chinese"
              onClick={(e) => {
                setLang(e.target.className);
              }}
            >
              중국어
            </button>
            <button
              className="Japanese"
              onClick={(e) => {
                setLang(e.target.className);
              }}
            >
              일본어
            </button>
          </div>
          <VocaPage lang={lang}/>
        </div>
    </>
  );
}