import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../App";
import LanguageBox from "../../css/game/LanguageStyle";
function Language() {
  const { wrongWordArr, setScore, setLang, setPop, pop } =
    useContext(GameContext);
  const navigate = useNavigate();
  const changeLanguage = (e) => {
    setLang(e.target.className);
    setPop(false);
    wrongWordArr.current = [];
    setScore(0); //---------------------------->서버 돌려서 확인해야 됨
  };
  return (
    <LanguageBox className={`${pop ? "" : "remove"} ${"language"}`}>
      <span
        onClick={() => {
          setPop(false);
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
