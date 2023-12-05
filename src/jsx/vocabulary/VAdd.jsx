import React, { useState } from "react";
import AddForm from "../../css/vocabulary/VocaAddStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import { useNavigate } from "react-router-dom";

export default function Add({ lang }) {
  const navigate = useNavigate();
  const [ex, setEx] = useState({
    id: "",
    word: "",
    meaning: "",
    pronunciation: "",
  });
  const [voca, setVoca] = useState(0);
  const handleAddClick = async () => {
    try {
      const response = await fetch(`http://localhost:8070/words/${lang}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ex),
      });
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <>
      <Header />
      <AddForm>
        <div className="WordBox">
          <span className="AddWord">단어</span>
          <input
            className="Word"
            type="text"
            onChange={(e) => {
              setEx((prev) => {
                let temp = prev;
                temp.word = e.target.value;
                return temp;
              });
            }}
            required
          ></input>
        </div>
        <div className="MeanBox">
          <span className="AddMean">의미</span>
          <input
            className="Meaning"
            type="text"
            onChange={(e) => {
              setEx((prev) => {
                let temp = prev;
                temp.meaning = e.target.value;
                return temp;
              });
            }}
            required
          ></input>
        </div>
        {lang !== "en" && (
          <div className="PronBox">
            <span className="AddPron">발음</span>
            <input
              className="Pronunciation"
              type="text"
              onChange={(e) => {
                setEx((prev) => {
                  let temp = prev;
                  temp.pronunciation = e.target.value;
                  return temp;
                });
              }}
              required
            ></input>
          </div>
        )}
        <div className="AddBox">
          <button
            className="AddBtn"
            onClick={() => {
              handleAddClick();
              navigate("/voca");
            }}
          >
            추가
          </button>
        </div>
      </AddForm>
      <Footer />
    </>
  );
}
