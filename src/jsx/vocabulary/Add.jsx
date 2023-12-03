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
  const postAddForm = (body) => {
    return fetch("/words/{lang}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  };
  const handleAddClick = async (e) => {
    e.preventDefault();
    const body = JSON.stringify(ex);
    const res = await postAddForm(body);
    const data = res.json();
    console.log(data.json);
  };
  return (
    <div>
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
        <PronBox lang={lang}>
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
        <AddBox>
          <AddBtn onClick={handleAddClick}>추가</AddBtn>
        </AddBox>
      </AddForm>
    </div>
  );
}