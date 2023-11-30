import styled from "styled-components";

const Wrong = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: wheat; */

  h2 {
    margin-top: 3vh;
  }
  .wordList {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-y: auto;
  }
  .wordList::-webkit-scrollbar {
    width: 8px;
  }
  .wordList::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #a97362;
  }
  .word {
    padding-left: 1vw;
    margin-bottom: 2vh;
    width: 75%;
    height: 25%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    background-color: #c59c84;
  }
  .word span {
    font-size: 20px;
    font-weight: 900;
    position: absolute;
    top: 0;
    right: 1vw;
  }
  p {
    font-size: 13px;
  }
  .foreignLanguage {
    margin-top: 2vh;
    font-size: 25px;
    font-weight: 900;
  }
  .mean {
    margin-top: 0.5vh;
    font-size: 20px;
  }
`;
export default Wrong;
