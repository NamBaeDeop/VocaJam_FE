import { useContext } from "react";
import Wrong from "../../css/game/WrongWordStyle";
import WordCard from "./WordCard";
import { GameContext } from "./Game";
function WrongWords() {
  const { wrongWordArr, wrongWordList, lan } = useContext(GameContext);

  return (
    <Wrong className={wrongWordList ? "" : "remove"}>
      <h2>틀린 단어</h2>
      <ul className="wordList">
        {wrongWordArr.current.map((x) => (
          <WordCard x={x} lan={lan} />
        ))}
      </ul>
    </Wrong>
  );
}

export default WrongWords;
