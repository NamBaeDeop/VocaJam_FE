import { FaGlobeAsia } from "react-icons/fa";
import Language from "./Language";
import { useContext, useEffect, useRef, useState } from "react";
import Play from "../../css/game/PlayStyle";
import { GameContext } from "../../App";
import { useNavigate } from "react-router-dom";

function GamePlay() {
  const {
    score,
    gameLang,
    answerBtn,
    wrongWordArr,
    setScore,
    popLang,
    setPopLang,
  } = useContext(GameContext);
  console.log(gameLang);
  const [arr, setArr] = useState({});
  const [hint, setHint] = useState(false);

  const navigate = useNavigate();

  let ref = useRef();

  const fetchFunc = async () => {
    try {
      let response = await fetch(`http://localhost:8070/game/${gameLang}`);
      // let response = await fetch(`/dum/enen.json`);
      let dataArr = await response.json();
      setArr(dataArr);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchFunc();
    let set = new Set();
    while (set.size != 4) {
      set.add(Math.floor(Math.random() * 4)); // 1~4까지 랜덤 & 중복 없이 숫자 생성 해 배열처럼 가지고 있으나 배열은 아님 }
      ref.current = Array.from(set); //Arry.from을 이용해  랜덤한 숫자가 들어있는 set을 ref에 넣어줌 뱐수처럼 사용할 예정
      // console.log(ref.current);
    }
  }, [score, gameLang]);

  if (answerBtn.current[0] != null) {
    for (let i = 0; i < 4; i++) {
      answerBtn.current[i].className = answerBtn.current[i].className.replace(
        /(good|wrong)/g,
        ""
      );
    }
  }

  let randomNum0 = `${ref.current != undefined ? ref.current[0] : ""}`; // ref.current의 값은 페이지가 렌더링 될때마다 랜덤하게 바뀜
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
      answerBtn.current.map(
        (
          x,
          y // return 부분에서 답 버튼들의 정보를 담아주었음 이를 map을 이용해 클래스 조회
        ) =>
          x.className.replace(/(answer| )/g, "") == "mean"
            ? (x.className = x.className + " good")
            : ""
      );
    }
    setTimeout(() => setScore((prev) => (prev = prev + 1)), 1500);
  };
  if (score == 10) {
    navigate("/finish");
  }

  const langArr = ["영어", "중국어", "일본어"];
  const langKey = ["en", "cn", "jp"];

  return (
    <Play>
      <Language game={true} />
      <div className="gameHeader">
        <FaGlobeAsia
          className="globe"
          onClick={() => {
            setPopLang(true);
          }}
        />
        <p className="progress">{score}/10</p>
        <span className="currentLang">
          {langArr[langKey.indexOf(gameLang)]}
        </span>
      </div>
      <div className="gameSection">
        <div className="question">
          <span className="word">{arr.word}</span>
          <span className="pronunciation">{hint ? arr.pronunciation : ""}</span>
          <button
            className={gameLang != "en" ? "" : "remove"}
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
