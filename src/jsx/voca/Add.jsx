import React, { useState } from "react";
import Header from "../default/Header";
import Footer from "../default/Footer";

export default function Add() {
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");
  const [pron, setPron] = useState("");
  const [explan, setExplan] = useState("");
  const [lang, setLang] = useState();
  return (
    <div>
      <Header />
      <main>
        <form>
          <p>단어</p>
          <input
            type="text"
            className="word"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
              console.log(word);
            }}
          ></input>
          <p>의미</p>
          <input
            type="text"
            className="mean"
            value={mean}
            onChange={(e) => {
              setMean(e.target.value);
              console.log(mean);
            }}
          ></input>
          <p>발음</p>
          <input
            type="text"
            className="pron"
            value={pron}
            onChange={(e) => {
              setPron(e.target.value);
              console.log(pron);
            }}
          ></input>
          <p>설명</p>
          <input
            type="text"
            className="explan"
            value={explan}
            onChange={(e) => {
              setExplan(e.target.value);
              console.log(explan);
            }}
          ></input>
          <button className="lang">추가</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
