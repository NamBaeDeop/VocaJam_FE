import React from "react";
import { useState } from "react";

import VocaCard from "./VCard";
import Main from "../../css/vocabulary/VocapageStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import { useNavigate } from "react-router-dom";

export default function VocaPage(props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header />
      <Main
        className={`${props.editMode ? "remove" : ""} ${
          props.pop ? "" : "remove"
        }`}
      >
        <div className="TitleBtnWrap">
          {props.lang === "en" && <h1>영어</h1>}
          {props.lang === "cn" && <h1>중국어</h1>}
          {props.lang === "jp" && <h1>일본어</h1>}
          <div
            className="GotoAdd"
            onClick={() => {
              navigate("/add");
            }}
          >
            +
          </div>
        </div>
        <ul>
          <VocaCard
            lang={props.lang}
            editMode={props.editMode}
            setEditMode={props.setEditMode}
            modalWord={props.modalWord}
            setModalWord={props.setModalWord}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </ul>
      </Main>
      <Footer />
    </>
  );
}
