import React, { useEffect, useState } from "react";

import Div from "../../css/vocabulary/VocaEditStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import { useNavigate } from "react-router-dom";
export default function Edit(props) {
  // console.log(props.word);
  const navigate = useNavigate();
  const [ex, setEx] = useState({
    word: props.word.word,
    meaning: props.word.meaning,
  });
  const [voca, setVoca] = useState(0); // 사랑이가 id 값을 넘겨줘야함. 수정할 때는 선택된 단어의 id 값을 state로 받아서 id 값에 넣어줘야함 이 부분을 얘기하면서 해야함 -> state 값을 사랑이가 넘겨주기 때문에
  const handleEditClick = async () => {
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
      navigate("/voca");
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <>
      <Header />
      <Div className={props.editMode ? "" : "remove"}>
        <form
          className="EditForm"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              e.preventDefault();
            }
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleEditClick();
          }}
        >
          <div className="inputSection">
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
                maxLength={16}
                required
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
                maxLength={16}
                required
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
                  maxLength={16}
                  required={props.lang == "en" ? false : true}
                />
              </div>
            )}
          </div>
          <div className="EditBox">
            <button
              className="back"
              onClick={(e) => {
                navigate("/voca");
                e.preventDefault();
              }}
            >
              뒤로가기
            </button>
            <button className="EditBtn">수정</button>
          </div>
        </form>
      </Div>
      <Footer />
    </>
  );
}
