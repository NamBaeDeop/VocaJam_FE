// import { CiGlobe } from "react-icons/ci";
import { FaGlobeAsia } from "react-icons/fa";
import Language from "./Language";
import { useEffect, useRef, useState } from "react";
import Play from "../../css/game/Play";

function GamePlay(props) {
  const [pop, setPop] = useState("remove");
  const [arr, setArr] = useState([]);
  const [hint, setHint] = useState(false);
  const [click, setClick] = useState(0);
  const [worng, setWrong] = useState("");
  const [good, setGood] = useState("");

  let ref = useRef();

  const fetchFunc = async () => {
    try {
      let respons = await fetch("./words.json");
      let dataArr = await respons.json();
      setArr(dataArr);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchFunc();

    let set = new Set();
    while (set.size != 4) {
      set.add(Math.floor(Math.random() * 4));
    }

    ref.current = Array.from(set);
  }, [props.score]);

  const answerArr = [
    arr.meaning,
    arr.otherMeaning1,
    arr.otherMeaning2,
    arr.otherMeaning3,
  ];
  const classArr = ["mean", "no", "no", "no"];

  if (props.answerBtn.current != "") {
    for (let i = 0; i < 4; i++) {
      props.answerBtn.current[i].className = props.answerBtn.current[
        i
      ].className.replace(/(good|wrong)/g, "");
    }
  }
  const answer = (e) => {
    if (e.target.className.replace(/(answer| )/g, "") == "mean") {
      // setGood("good");
      e.target.className = e.target.className + " good";
    } else {
      // setWrong("wrong");
      e.target.className = e.target.className + " wrong";
      props.answerBtn.current.map((x, y) =>
        x.className.replace(/(answer| )/g, "") == "mean"
          ? (x.className = x.className + " good")
          : ""
      );
    }
    setTimeout(() => props.setScore((prev) => (prev = prev + 1)), 1500);
  };

  return (
    <Play>
      <Language pop={pop} setPop={setPop} />
      <div className="gameHeader">
        <FaGlobeAsia
          className="globe"
          onClick={() => {
            setPop("");
          }}
        />
        <p className="progress">
          <span>{props.score}</span>/10
        </p>
      </div>
      <div className="gameSection">
        <div className="question">
          <span className="word">{arr.word}</span>
          <span className="pronunciation">{hint ? arr.pronunciation : ""}</span>
          <button
            onClick={() => {
              setHint((prev) => !prev);
            }}
          >
            발음 보기
          </button>
        </div>
        <div className="answerBox">
          <div className="answerTop">
            <div
              className={`answer ${
                classArr[`${ref.current != undefined ? ref.current[0] : ""}`]
              } ${worng}`}
              ref={(e) => (props.answerBtn.current[0] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[`${ref.current != undefined ? ref.current[0] : ""}`]}
            </div>
            <div
              className={`answer ${
                classArr[`${ref.current != undefined ? ref.current[1] : ""}`]
              }`}
              ref={(e) => (props.answerBtn.current[1] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[`${ref.current != undefined ? ref.current[1] : ""}`]}
            </div>
          </div>
          <div className="answerBtm">
            <div
              className={`answer ${
                classArr[`${ref.current != undefined ? ref.current[2] : ""}`]
              }`}
              ref={(e) => (props.answerBtn.current[2] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[`${ref.current != undefined ? ref.current[2] : ""}`]}
            </div>
            <div
              className={`answer ${
                classArr[`${ref.current != undefined ? ref.current[3] : ""}`]
              }`}
              ref={(e) => (props.answerBtn.current[3] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[`${ref.current != undefined ? ref.current[3] : ""}`]}
            </div>
          </div>
        </div>
      </div>
    </Play>
  );
}

export default GamePlay;
