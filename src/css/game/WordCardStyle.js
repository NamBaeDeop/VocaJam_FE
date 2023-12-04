import styled from "styled-components";

const WordCardStyle = styled.ul`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;

  ul::-webkit-scrollbar {
    width: 8px;
  }
  ul::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #a97362;
  }
  .word {
    padding-left: 1vw;
    margin-top: 2vh;
    width: 75%;
    height: 25%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    background-color: #c59c84;
  }
  p {
    font-size: 13px;
  }
  .foreignLanguage {
    margin-top: 1vh;
    font-size: 25px;
    font-weight: 600;
  }
  .mean {
    margin-top: 0.5vh;
    font-size: 17px;
  }
`;

export default WordCardStyle;
