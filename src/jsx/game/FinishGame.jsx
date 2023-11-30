import { useContext } from "react";
import Finish from "../../css/game/FinishGameStyle";
import { GameContext } from "./Game";
function FinishGame() {
  const { score, wrongWordArr, wrongWordList, setScore, setWrongWordList } =
    useContext(GameContext);

  return (
    <Finish className={score == 1 && wrongWordList == 0 ? "" : "remove"}>
      <div className="scoreBox">
        <span>틀린 단어</span>
        <span className="score">{wrongWordArr.current.length}</span>
      </div>
      <div className="btnBox">
        <div
          className="wrongWords"
          onClick={() => {
            setWrongWordList(1);
          }}
        >
          틀린 단어 보기
        </div>
        <div
          className="retry"
          onClick={() => {
            setScore(0);
          }}
        >
          재시작
        </div>
      </div>
    </Finish>
  );
}

export default FinishGame;
