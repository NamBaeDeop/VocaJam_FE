import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../App";
import LanguageBox from "../../css/game/LanguageStyle";
function Language(props) {
  const { wrongWordArr, setScore, setGameLang, setPopLang, popLang, setLang } =
    useContext(GameContext);
  const navigate = useNavigate();
  const changeLanguage = (e) => {
    if (props.game) {
      setGameLang(e.target.className);
    }
    if (props.search) {
      setLang(e.target.className);
    }
    setPopLang(false);
    wrongWordArr.current = [];
    setScore(0);
  };
  return (
    <LanguageBox className={`${popLang ? "" : "remove"} ${"language"}`}>
      <span
        onClick={() => {
          setPopLang(false);
        }}
      >
        x
      </span>
      <div className="languageBox">
        <p
          className="en"
          onClick={(e) => {
            changeLanguage(e);
          }}
        >
          영어
        </p>
        <p
          className="cn"
          onClick={(e) => {
            changeLanguage(e);
          }}
        >
          중국어
        </p>
        <p
          className="jp"
          onClick={(e) => {
            changeLanguage(e);
          }}
        >
          일본어
        </p>
      </div>
    </LanguageBox>
  );
}

export default Language;
