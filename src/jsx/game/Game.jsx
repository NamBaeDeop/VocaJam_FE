import Header from "../default/Header";
import Footer from "../default/Footer";
import Main from "../../css/game/GameStyle";
import GamePlay from "./GamePlay";
import FinishGame from "./FinishGame";
import WrongWords from "./WrongWords";
import { useState } from "react";
function Game(props) {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header />
      <Main>
        {/* <WrongWords /> */}
        {/* <FinishGame /> */}
        <GamePlay score={score} setScore={setScore} />
      </Main>
      <Footer />
    </>
  );
}

export default Game;
