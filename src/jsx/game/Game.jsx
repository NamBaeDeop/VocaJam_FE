import { createContext, useRef, useState } from "react";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Main from "../../css/game/GameStyle";
import GamePlay from "./GamePlay";
import FinishGame from "./FinishGame";
import WrongWords from "./WrongWords";

export const GameContext = createContext();

function Game() {
  const [score, setScore] = useState(0);
  const [lan, setLan] = useState("EN");
  const [wrongWordList, setWrongWordList] = useState(0);
  let answerBtn = useRef([]);
  let wrongWordArr = useRef([]);

  console.log(lan);
  return (
    <>
      <Header />
      <GameContext.Provider
        value={{
          score,
          lan,
          wrongWordList,
          setWrongWordList,
          answerBtn,
          wrongWordArr,
          setScore,
          setLan,
        }}
      >
        <Main>
          <WrongWords />
          <FinishGame />
          <GamePlay />
        </Main>
      </GameContext.Provider>
      <Footer />
    </>
  );
}

export default Game;
