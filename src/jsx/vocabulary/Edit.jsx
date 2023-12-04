import React, { useState } from "react";
import styled from "styled-components";
import {
  EditBox,
  EditBtn,
  EditForm,
  EditMean,
  EditPron,
  EditWord,
  MeanBox,
  Meaning,
  PronBox,
  Pronunciation,
  Word,
  WordBox,
} from "../../css/VocaEdit";

export default function Edit({ lang }) {
  // console.log(lang);
  const [ex, setEx] = useState({
    id: "",
    word: "",
    meaning: "",
    pronunciation: "",
  });
  const [voca, setVoca] = useState(0); // 사랑이가 id 값을 넘겨줘야함. 수정할 때는 선택된 단어의 id 값을 state로 받아서 id 값에 넣어줘야함 이 부분을 얘기하면서 해야함 -> state 값을 사랑이가 넘겨주기 때문에
  const handleEditClick = async () => {
    try {
      const response = await fetch(`localhost:8070/words/{lang}/{id}`);
      const data = await response.json();
      setEx(data);
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <main className="editMain">
      <EditForm>
        <WordBox>
          <EditWord>단어</EditWord>
          <Word
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setEx((prev) => {
                let temp = prev;
                temp.word = e.target.value;
                console.log(temp);
                return temp;
              });
            }}
          ></Word>
        </WordBox>
        <MeanBox>
          <EditMean>의미</EditMean>
          <Meaning
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setEx((prev) => {
                let temp = prev;
                temp.meaning = e.target.value;
                console.log(temp);
                return temp;
              });
            }}
          ></Meaning>
        </MeanBox>
        {lang !== "EN" && (
          <PronBox>
            <EditPron>발음</EditPron>
            <Pronunciation
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setEx((prev) => {
                  let temp = prev;
                  temp.pronunciation = e.target.value;
                  console.log(temp);
                  return temp;
                });
              }}
            ></Pronunciation>
          </PronBox>
        )}
        <EditBox>
          <EditBtn onClick={handleEditClick}>수정</EditBtn>
        </EditBox>
      </EditForm>
    </main>
  );
}