import Header from "../default/Header";
import Footer from "../default/Footer";
import Main from "../../css/game/GameStyle";
import GamePlay from "./GamePlay";
import FinishGame from "./FinishGame";
import WrongWords from "./WrongWords";
import { useRef, useState } from "react";
function Game(props) {
  const [score, setScore] = useState(0);
  // const [worng, setWrong] = useState("");
  // const [good, setGood] = useState("");
  let answerBtn = useRef([]);
  // console.log(answerBtn.current);
  return (
    <>
      <Header />
      <Main>
        {/* <WrongWords /> */}
        {/* <FinishGame /> */}
        <GamePlay
          answerBtn={answerBtn}
          score={score}
          setScore={setScore}
          // good={good}
          // setGood={setGood}
          // worng={worng}
          setWrong={setWrong}
        />
      </Main>
      <Footer />
    </>
  );
}

export default Game;
