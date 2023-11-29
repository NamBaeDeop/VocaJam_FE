import styled from "styled-components";

const LanguageBox = styled.div`
  width: 70%;
  height: 45%;
  border: 4px solid #c77d7d;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18vh;
  z-index: 2;

  background-color: #efaaaa;

  .languageBox {
    margin-top: 3vh;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  span {
    font-size: 28px;
    font-weight: 600;
    position: absolute;
    top: 0;
    right: 1vw;
    z-index: 2;
  }
  span {
    cursor: pointer;
  }
  p {
    width: 100%;
    height: 20%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
`;
export default LanguageBox;
