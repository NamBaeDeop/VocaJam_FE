import React from "react";
import { useState, useEffect } from "react";
import VocaModal from "./VModal";
import CardStyle from "../../css/vocabulary/VocaCardStyle";
import Edit from "./VEdit";

export default function VocaCard(props) {
  const [voca, setVoca] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8070/words/${props.lang}`);
      // const response = await fetch(`../dum/dumen.json`);
      const data = await response.json();
      setVoca(data);
    } catch (error) {
      console.error("어 패치 실패했어~", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(voca);

  const openModal = (clickedWord) => {
    props.setModalWord(clickedWord);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    props.setModalWord(null);
  };

  return (
    <>
      {voca.map((item) => (
        <CardStyle className="card" key={item.id}>
          <div className="con card_top">
            <span className="word">{item.word}</span>
            <span
              className="word to_modal"
              onClick={() => {
                openModal(item);
              }}
            >
              &middot;&middot;&middot;
            </span>
          </div>
          <span
            className={`con pronounciation ${
              props.lang === "EN" ? "remove" : ""
            }`}
          >
            {item.pronunciation}
          </span>
          <span className="con meaning">{item.meaning}</span>
        </CardStyle>
      ))}
      {showModal && (
        <VocaModal
          word={props.modalWord}
          onClose={closeModal}
          editMode={props.editMode}
          setEditMode={props.setEditMode}
          setShowModal={setShowModal}
          lang={props.lang}
        />
      )}
    </>
  );
}
