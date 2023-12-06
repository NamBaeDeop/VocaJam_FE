import { useContext } from "react";
import { GameContext } from "../../App";
import WordCard from "./WordCard";
import WordCardStyle from "../../css/game/WordCardStyle";
import Wrong from "../../css/game/WrongWordStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import { useNavigate } from "react-router-dom";
function WrongWords() {
  const { wrongWordArr, wrongWordList, lang, setScore } =
    useContext(GameContext);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Wrong className={wrongWordList ? "" : "remove"}>
        <h2>틀린 단어</h2>
        <WordCardStyle className="wordList">
          {wrongWordArr.current.map((x) => (
            <WordCard x={x} lang={lang} />
          ))}
        </WordCardStyle>
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
      </Wrong>
      <Footer />
    </>
  );
}

export default WrongWords;
