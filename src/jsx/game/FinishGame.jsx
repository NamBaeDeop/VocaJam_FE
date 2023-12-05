import { useContext } from "react";
import Finish from "../../css/game/FinishGameStyle";
import { GameContext } from "../../App";
import Header from "../default/Header";
import Footer from "../default/Footer";
import { useNavigate } from "react-router-dom";
function FinishGame() {
  const { score, wrongWordArr, wrongWordList, setScore, setWrongWordList } =
    useContext(GameContext);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Finish>
        <div className="scoreBox">
          <span>틀린 단어</span>
          <span className="score">{wrongWordArr.current.length}</span>
        </div>
        <div className="btnBox">
          <div
            className="wrongWords"
            onClick={() => {
              navigate("/worngword");
              setScore(0);
            }}
          >
            틀린 단어 보기
          </div>
          <div
            className="retry"
            onClick={() => {
              setScore(0);
              navigate("/game");
              wrongWordArr.current = [];
            }}
          >
            재시작
          </div>
        </div>
      </Finish>
      <Footer />
    </>
  );
}

export default FinishGame;
