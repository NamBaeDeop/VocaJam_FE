import React, { useState } from "react";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Main from "../../css/VocaMain";
import VocaPage from "./VocaPage";
import Edit from "./Edit";
import { useNavigate } from "react-router-dom";

export default function VocaMain(props) {
  let navigate = useNavigate();

  const Language = (e) => {
    props.setLang(e.target.className);
    props.setPop(true);
    navigate("/voca");
  };
  return (
    <>
      <Main className={props.pop ? "remove" : ""}>
        <h1>언어를 선택해주세요</h1>
        <div className="btnBox">
          <button className="en" onClick={(e) => {}}>
            영어
          </button>
          <button
            className="cn"
            onClick={(e) => {
              props.setLang(e.target.className);
              props.setPop(true);
            }}
          >
            중국어
          </button>
          <button
            className="jp"
            onClick={(e) => {
              props.setLang(e.target.className);
              props.setPop(true);
            }}
          >
            일본어
          </button>
        </div>
      </Main>
    </>
  );
}
