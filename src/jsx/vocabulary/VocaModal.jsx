import React from "react";
// import { useState } from "react";
import { Modal } from "../../css/VocaModal";
// import { EditForm } from "../../css/VocaEdit";
// import Edit from "./Edit";
export default function VocaModal({
  lang,
  clickedWord,
  word,
  onClose,
  onDelete,
  editMode,
  setEditMode,
  setShowModal,
}) {
  console.log("modal", lang);
  //   console.log(editMode);
  // console.log(word, "vocamodal");
  // console.log(lang, "lang in vocamodal");
  // console.log(`localhost:8070/words/${lang.lang}/${word.id}`);

  const handleEditClick = () => {
    setEditMode(true);
    // setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      await fetch(`localhost:8070/words/${lang.lang}/${word.id}`, {
        method: "DELETE",
      });
      onDelete(word.id);
      //   onClose();
      setShowModal(false);
      // console.log("아 성공이죠?");
    } catch (error) {
      console.error("Failed to delete:", error);
      // console.log("아 에러낫죠?");
    }
  };

  return (
    <>
      {/* {!editMode && ( */}
      <Modal>
        <div className="TitleExit">
          <div className="TopCon word">{word.word}</div>
          <div
            className="TopCon exit"
            onClick={(e) => {
              // console.log("모달창 껐어용");
              //   onClose();
              setShowModal(false);
            }}
          >
            X
          </div>
        </div>
        <div className="Btns">
          <div className="Btn" onClick={handleEditClick}>수정</div>
          <div className="Btn" onClick={handleDelete}>삭제</div>
        </div>
      </Modal>
    </>
  );
}
