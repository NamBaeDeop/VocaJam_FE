import Finish from "../../css/game/FinishGameStyle";
function FinishGame() {
  return (
    <Finish>
      <div className="scoreBox">
        <span>틀린 단어</span>
        <span className="score">0</span>
      </div>
      <div className="btnBox">
        <div className="wrongWords">틀린 단어 보기</div>
        <div className="retry">재시작</div>
      </div>
    </Finish>
  );
}

export default FinishGame;
