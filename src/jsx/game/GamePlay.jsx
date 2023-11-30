import { FaGlobeAsia } from "react-icons/fa";
import Language from "./Language";
import { useContext, useEffect, useRef, useState } from "react";
import Play from "../../css/game/Play";
import { GameContext } from "./Game";

function GamePlay() {
  const { score, lan, answerBtn, setLan, wrongWordArr, setScore } =
    useContext(GameContext);

  const [pop, setPop] = useState("remove");
  const [arr, setArr] = useState({});
  const [hint, setHint] = useState(false);

  let ref = useRef();

  const fetchFunc = async () => {
    try {
      // let respons = await fetch(`localhost:8070/game/${lan}`);
      let respons = await fetch(`../words/${lan}.json`);
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
  }, [score, lan]);

  if (answerBtn.current != "") {
    for (let i = 0; i < 4; i++) {
      answerBtn.current[i].className = answerBtn.current[i].className.replace(
        /(good|wrong)/g,
        ""
      );
    }
  }

  let randomNum0 = `${ref.current != undefined ? ref.current[0] : ""}`;
  let randomNum1 = `${ref.current != undefined ? ref.current[1] : ""}`;
  let randomNum2 = `${ref.current != undefined ? ref.current[2] : ""}`;
  let randomNum3 = `${ref.current != undefined ? ref.current[3] : ""}`;

  const answerArr = [
    arr.meaning,
    arr.otherMeaning1,
    arr.otherMeaning2,
    arr.otherMeaning3,
  ];
  const classArr = ["mean", "no", "no", "no"];

  const answer = (e) => {
    if (e.target.className.replace(/(answer| )/g, "") == "mean") {
      e.target.className = e.target.className + " good";
    } else {
      e.target.className = e.target.className + " wrong";
      wrongWordArr.current.push(arr);
      answerBtn.current.map((x, y) =>
        x.className.replace(/(answer| )/g, "") == "mean"
          ? (x.className = x.className + " good")
          : ""
      );
    }
    setTimeout(() => setScore((prev) => (prev = prev + 1)), 1500);
  };

  return (
    <Play className={score == 1 ? "remove" : ""}>
      <Language pop={pop} setPop={setPop} setLan={setLan} />
      <div className="gameHeader">
        <FaGlobeAsia
          className="globe"
          onClick={() => {
            setPop("");
          }}
        />
        <p className="progress">{score}/10</p>
      </div>
      <div className="gameSection">
        <div className="question">
          <span className="word">{arr.word}</span>
          <span className="pronunciation">{hint ? arr.pronunciation : ""}</span>
          <button
            className={lan != "EN" ? "" : "remove"}
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
              className={`answer ${classArr[randomNum0]}`}
              ref={(e) => (answerBtn.current[0] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[randomNum0]}
            </div>
            <div
              className={`answer ${classArr[randomNum1]}`}
              ref={(e) => (answerBtn.current[1] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[randomNum1]}
            </div>
          </div>
          <div className="answerBtm">
            <div
              className={`answer ${classArr[randomNum2]}`}
              ref={(e) => (answerBtn.current[2] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[randomNum2]}
            </div>
            <div
              className={`answer ${classArr[randomNum3]}`}
              ref={(e) => (answerBtn.current[3] = e)}
              onClick={(e) => {
                answer(e);
              }}
            >
              {answerArr[randomNum3]}
            </div>
          </div>
        </div>
      </div>
    </Play>
  );
}

export default GamePlay;
