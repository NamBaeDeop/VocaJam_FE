import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useRef } from "react";
import Voca from "./jsx/vocabulary/Voca";
import VocaPage from "./jsx/vocabulary/VPage";
import Edit from "./jsx/vocabulary/VEdit";
import Add from "./jsx/vocabulary/VAdd";
import Game from "./jsx/game/Game";
import FinishGame from "./jsx/game/FinishGame";
import WrongWords from "./jsx/game/WrongWords";
import Search from "./jsx/search/Search";
export const GameContext = createContext();
function App() {
  const [lang, setLang] = useState("en");
  const [pop, setPop] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [modalWord, setModalWord] = useState(null);

  const [score, setScore] = useState(0);
  const [wrongWordList, setWrongWordList] = useState(0);
  const [popLang, setPopLang] = useState(false);
  const [gameLang, setGameLang] = useState("en");
  let answerBtn = useRef([null]);
  let wrongWordArr = useRef([]);
  return (
    <BrowserRouter>
      <GameContext.Provider
        value={{
          score,
          lang,
          wrongWordList,
          setWrongWordList,
          answerBtn,
          wrongWordArr,
          setScore,
          setLang,
          pop,
          setPop,
          setPopLang,
          popLang,
          gameLang,
          setLang,
          setGameLang,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Voca
                lang={lang}
                setLang={setLang}
                pop={pop}
                setPop={setPop}
                editMode={editMode}
                setEditMode={setEditMode}
                modalWord={modalWord}
                setModalWord={setModalWord}
              />
            }
          />
          <Route
            path="/voca"
            element={
              <VocaPage
                lang={lang}
                editMode={editMode}
                setEditMode={setEditMode}
                modalWord={modalWord}
                setModalWord={setModalWord}
                pop={pop}
              />
            }
          />
          <Route path={"/add"} element={<Add lang={lang} />} />
          <Route
            path={"/edit"}
            element={
              <Edit
                word={modalWord}
                editMode={editMode}
                setEditMode={setEditMode}
                lang={lang}
              />
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<FinishGame />} />
          <Route path="/worngword" element={<WrongWords />} />
        </Routes>
      </GameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
