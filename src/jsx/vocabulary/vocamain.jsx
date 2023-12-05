import React, { useState } from "react";
import VocaPage from "./VocaPage";
import Main from "../../css/VocaMainStyle";
import { useNavigate } from "react-router-dom";
export default function VocaMain(props) {
  // const [lang, setLang] = useState(null);
  const navigate = useNavigate();
  const popFunc = (e) => {
    props.setPop(true);
    props.setLang(e.target.className);
    navigate("/voca");
  };
  return (
    <>
      {/* {!lang && ( */}
      <Main>
        <h1>언어를 선택해주세요</h1>
        <div className="btnBox">
          <button
            className="en"
            onClick={(e) => {
              popFunc(e);
            }}
          >
            영어
          </button>
          <button
            className="cn"
            onClick={(e) => {
              popFunc(e);
            }}
          >
            중국어
          </button>
          <button
            className="jp"
            onClick={(e) => {
              popFunc(e);
            }}
          >
            일본어
          </button>
        </div>
      </Main>
      {/* )} */}
      {/* {lang && <VocaPage lang={lang} />} */}
    </>
  );
}
