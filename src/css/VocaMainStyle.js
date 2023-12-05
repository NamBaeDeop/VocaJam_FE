import styled from "styled-components";

const Main = styled.div`
  background-color: #faeed6;
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
  }

  .btnBox {
    width: 360px;
    height: 480px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .en {
      width: 269px;
      height: 94px;
      background-color: #d4af9a;
      border: none;
      border-radius: 20px;
      font-size: 25px;
      cursor: pointer;
    }
    .cn {
      width: 269px;
      height: 94px;
      background-color: #d4af9a;
      border: none;
      border-radius: 20px;
      font-size: 25px;
      cursor: pointer;
    }
    .jp {
      width: 269px;
      height: 94px;
      background-color: #d4af9a;
      border: none;
      border-radius: 20px;
      font-size: 25px;
      cursor: pointer;
    }
  }

  .remove {
    display: none;
  }
`;

export default Main;
