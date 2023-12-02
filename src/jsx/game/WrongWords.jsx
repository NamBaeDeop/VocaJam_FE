import { useContext } from "react";
import { GameContext } from "./Game";
import WordCard from "./WordCard";
import WordCardStyle from "../../css/game/WordCardStyle";
import Wrong from "../../css/game/WrongWordStyle";
function WrongWords() {
  const { wrongWordArr, wrongWordList, lan } = useContext(GameContext);

  return (
    <Wrong className={wrongWordList ? "" : "remove"}>
      <h2>틀린 단어</h2>
      <WordCardStyle className="wordList">
        {wrongWordArr.current.map((x) => (
          <WordCard x={x} lan={lan} />
        ))}
      </WordCardStyle>
    </Wrong>
  );
}

export default WrongWords;
