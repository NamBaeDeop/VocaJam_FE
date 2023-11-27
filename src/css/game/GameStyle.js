import styled from "styled-components";
const Main = styled.main`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #faeed6;
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
    top: 1.5vh;
    right: 10vw;
    cursor: pointer;
  }
  .progress {
    margin-top: 1vh;
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
    justify-content: center;
    align-items: center;
    background-color: #d4af9a;
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d4af9a;
  }
  .remove {
    display: none;
  }
`;

export default Main;
