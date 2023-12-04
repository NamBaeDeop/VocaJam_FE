import React from "react";
import { useState, useEffect } from "react";
import VocaModal from "./VocaModal";
import Card from "../../css/VocaCard";
import Edit from "./Edit";

export default function VocaCard(props) {
  const [voca, setVoca] = useState([]);
  const langValue = props.lang;
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(`localhost:8070/words/${props.lang}`);
      const data = await response.json();
      setVoca(data);
    } catch (error) {
      console.error("어 패치 실패했어~", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langValue]);

  // const openModal = (clickedWord) => {
  //     console.log(clickedWord, "openmodal");
  //     // setModalWord(word);
  //     <VocaModal word={clickedWord} />;
  // }

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
        <Card className="card" key={item.id}>
          <div className="con card_top">
            <span className="word">{item.word}</span>
            <span
              className="word to_modal"
              onClick={() => {
                openModal(item);
                // console.log(voca[item.id-1]);
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
        </Card>
      ))}
      {showModal && (
        <VocaModal
          word={props.modalWord}
          onClose={closeModal}
          editMode={props.editMode}
          setEditMode={props.setEditMode}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
