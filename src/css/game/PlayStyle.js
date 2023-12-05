import styled from "styled-components";

const Play = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .gameHeader {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .globe {
    font-size: 30px;
    position: relative;
    top: 20px;
    right: 145px;
    cursor: pointer;
  }
  .progress {
    font-size: 25px;
    font-weight: 600;
  }
  .gameSection {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .question {
    width: 70%;
    height: 35%;
    border-radius: 15px;
    font-size: 25px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #d4af9a;
  }
  button {
    width: 23%;
    height: 17%;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    color: #f7e7db;
    outline: none;
    position: absolute;
    top: 105px;
    left: 12px;
    background-color: #a97362;
  }
  .pronunciation {
    font-size: 14px;
    position: absolute;
    top: 105px;
  }
  .answerBox {
    width: 75%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .answerTop,
  .answerBtm {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: space-evenly;
  }
  .answer {
    width: 45%;
    height: 100%;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d4af9a;
    cursor: pointer;
  }
  .good {
    width: 43%;
    height: 98%;
    border: 3px solid green;
  }
  .wrong {
    width: 43%;
    height: 98%;
    border: 3px solid red;
  }
  .currentLang {
    margin-top: 7px;
  }
`;

export default Play;
