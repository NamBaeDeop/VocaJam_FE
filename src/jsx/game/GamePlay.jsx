// import { CiGlobe } from "react-icons/ci";
import { FaGlobeAsia } from "react-icons/fa";
import Language from "./Language";
import { useEffect, useRef, useState } from "react";

function GamePlay(props) {
  const [pop, setPop] = useState("remove");
  // console.log(pop);

  let arr = useRef();
  const fetchFunc = async () => {
    try {
      let respons = await fetch("./words.json");
      let dataArr = await respons.json();
      console.log(dataArr);
      arr.current = dataArr;
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  // console.log(arr.current.length);
  let random = Math.floor(Math.random() * arr.current.length);
  // console.log();
  // console.log();
  // arr.current.map((x) => console.log(x));
  return (
    <>
      <div className="gameHeader">
        <FaGlobeAsia
          className="globe"
          onClick={() => {
            setPop("");
          }}
        />
        <p className="progress">
          <span>0</span>/10
        </p>
      </div>
      <div className="gameSection">
        <div className="question">{arr.current[props.score].word}</div>
        <div className="answerBox">
          <div className="answerTop">
            <div className="answer"></div>
            <div className="answer">답 2</div>
          </div>
          <div className="answerBtm">
            <div className="answer">답 3</div>
            <div className="answer">답 4</div>
          </div>
        </div>
      </div>
      <Language pop={pop} setPop={setPop} />
    </>
  );
}

export default GamePlay;
