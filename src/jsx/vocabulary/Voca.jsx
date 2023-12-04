import VocaMain from "./VocaMain";
import VocaPage from "./VocaPage";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Edit from "./Edit";

import Main from "../../css/StyleVoca";
import { useState } from "react";

function Voca() {
  const [lang, setLang] = useState(null);
  const [pop, setPop] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [modalWord, setModalWord] = useState(null);

  return (
    <>
      <Header />
      <Main>
        <VocaMain pop={pop} setPop={setPop} lang={lang} setLang={setLang} />
        <Edit
          word={modalWord}
          editMode={editMode}
          setEditMode={setEditMode}
          lang={lang}
        />
        <VocaPage
          lang={lang}
          editMode={editMode}
          setEditMode={setEditMode}
          modalWord={modalWord}
          setModalWord={setModalWord}
          pop={pop}
        />
      </Main>
      <Footer />
    </>
  );
}

export default Voca;
