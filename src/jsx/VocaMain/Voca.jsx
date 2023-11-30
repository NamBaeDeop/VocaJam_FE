import React, { useEffect, useState } from "react";

export default function Voca() {
  const [lang, setLang] = useState();

  return (
    <div className="content">
      <p className="h1">언어를 선택해주세요</p>
      <div className="btn">
        <button
          className="en"
          onClick={(e) => {
            setLang(e.target.className);
          }}
        >
          영어
        </button>
        <button
          className="ch"
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
    </div>
  );
}
