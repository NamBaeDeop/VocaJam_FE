import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faeed6;
  position: relative;

  & > h1 {
    width: 270px;
    margin-top: 30px;
    font-size: 25px;
  }
  h1 {
    margin-right: 1.5vw;
    font-size: 25px;
  }

  .TitleBtnWrap {
    margin-top: 20px;
    display: flex;
    width: 275px;
    height: 10%;
    justify-content: end;
    align-items: center;
  }
  .GotoAdd {
    display: flex;
    width: 30px;
    height: 30px;
    background-color: #33160d;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #faeed6;
    cursor: pointer;
  }
  .remove {
    display: none;
  }
  ul {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    /*aa  */
  }
  ul::-webkit-scrollbar {
    width: 8px;
  }
  ul::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #a97362;
  }
`;
export default Main;
