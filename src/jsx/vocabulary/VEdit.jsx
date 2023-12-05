import React, { useEffect, useState } from "react";

import Div from "../../css/vocabulary/VocaEditStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import { useNavigate } from "react-router-dom";
export default function Edit(props) {
  const navigate = useNavigate();
  const [ex, setEx] = useState({
    word: "",
    meaning: "",
  });
  const [voca, setVoca] = useState(0); // 사랑이가 id 값을 넘겨줘야함. 수정할 때는 선택된 단어의 id 값을 state로 받아서 id 값에 넣어줘야함 이 부분을 얘기하면서 해야함 -> state 값을 사랑이가 넘겨주기 때문에
  const handleEditClick = async () => {
    console.log(ex);
    try {
      const response = await fetch(
        `http://localhost:8070/words/${props.lang}/${props.word.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ex),
        }
      );
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <>
      <Header />
      <Div className={props.editMode ? "" : "remove"}>
        <div className="EditForm">
          <div className="WordBox">
            <p className="EditWord">단어</p>
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
              defaultValue={props.word != null ? props.word.word : ""}
            />
          </div>
          <div className="MeanBox">
            <p className="EditMean">의미</p>
            <input
              className="Meaning"
              type="text"
              onChange={(e) => {
                setEx((prev) => {
                  let temp = prev;
                  if (props.lang != "en") {
                    temp.pronunciation = "";
                  }
                  temp.meaning = e.target.value;
                  return temp;
                });
              }}
              defaultValue={props.word != null ? props.word.meaning : ""}
            />
          </div>
          {props.lang !== "en" && (
            <div className="PronBox">
              <p className="EditPron">발음</p>
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
                defaultValue={
                  props.word != null ? props.word.pronunciation : ""
                }
              />
            </div>
          )}
          <div className="EditBox">
            <button
              onClick={() => {
                navigate("/voca");
              }}
            >
              뒤로가기
            </button>
            <button
              className="EditBtn"
              onClick={() => {
                handleEditClick();
                navigate("/voca");
              }}
            >
              수정
            </button>
          </div>
        </div>
      </Div>
      <Footer />
    </>
  );
}
