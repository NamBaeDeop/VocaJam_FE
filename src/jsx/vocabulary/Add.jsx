import React, { useState } from "react";
import styled from "styled-components";
import {
  AddForm,
  WordBox,
  AddWord,
  MeanBox,
  Word,
  AddMean,
  Meaning,
  PronBox,
  AddPron,
  Pronunciation,
  AddBox,
  AddBtn,
} from "../../css/vocaAdd";

export default function Add({ lang }) {
  const [ex, setEx] = useState({
    id: "",
    word: "",
    meaning: "",
    pronunciation: "",
  });
  const [voca, setVoca] = useState(0);
  const handleAddClick = async () => {
    try {
      const response = await fetch(`localhost:8070//words/{lang}`);
      const data = await response.json();
      setEx(data);
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <main>
      <AddForm>
        <WordBox>
          <AddWord>단어</AddWord>
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
          <AddMean>의미</AddMean>
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
            <AddPron>발음</AddPron>
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
        <AddBox>
          <AddBtn onClick={handleAddClick}>추가</AddBtn>
        </AddBox>
      </AddForm>
    </main>
  );
}
