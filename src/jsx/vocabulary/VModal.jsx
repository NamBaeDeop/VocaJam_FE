import React from "react";
// import { useState } from "react";
import { Modal } from "../../css/vocabulary/VocaModalStyle";
import { useNavigate } from "react-router-dom";
// import { EditForm } from "../../css/VocaEdit";
// import Edit from "./Edit";
export default function VocaModal({
  lang,
  word,
  onDelete,
  setEditMode,
  setShowModal,
}) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(true);
    setShowModal(false);
    navigate("/edit");
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8070/words/${lang}/${word.id}`, {
        method: "DELETE",
      });
      // onDelete(word.id);
      setShowModal(false);
    } catch (error) {
      setShowModal(false);
      console.error("Failed to delete:", error);
    }
  };

  return (
    <>
      <Modal>
        <div className="TitleExit">
          <div className="TopCon word">{word.word}</div>
          <div
            className="TopCon exit"
            onClick={(e) => {
              setShowModal(false);
            }}
          >
            X
          </div>
        </div>
        <div className="Btns">
          <div className="Btn" onClick={handleEditClick}>
            수정
          </div>
          <div className="Btn" onClick={handleDelete}>
            삭제
          </div>
        </div>
      </Modal>
    </>
  );
}
