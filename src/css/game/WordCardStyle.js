import styled from "styled-components";

const WordCardStyle = styled.ul`
  margin-top: 10px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #a97362;
  }
  .word {
    margin-top: 2vh;
    width: 75%;
    height: 25%;
    border-radius: 20px;
    text-indent: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-shrink: 0;
    position: relative;
    background-color: #c59c84;
  }
  p {
    font-size: 13px;
  }
  .foreignLanguage {
    font-size: 25px;
    font-weight: 600;
  }
  .mean {
    font-size: 17px;
  }
`;

export default WordCardStyle;
