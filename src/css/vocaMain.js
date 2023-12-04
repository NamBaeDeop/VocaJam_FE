import styled from "styled-components";

export const Main = styled.div`
  background-color: #faeed6;
  width: 360px;
  height: 513px;
  display: flex;
  flex-direction: column;

  .remove{
    display: none !important;
  }
`;

export const H1 = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  font-size: 30px;
  font-weight: bold;
`;

export const Btn = styled.div`
  width: 360px;
  height: 480px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  .EN {
    width: 269px;
    height: 94px;
    background-color: #d4af9a;
    border: none;
    border-radius: 20px;
    font-size: 25px;
    cursor: pointer;
  }
  .CN {
    width: 269px;
    height: 94px;
    background-color: #d4af9a;
    border: none;
    border-radius: 20px;
    font-size: 25px;
    cursor: pointer;
  }
  .JP {
    width: 269px;
    height: 94px;
    background-color: #d4af9a;
    border: none;
    border-radius: 20px;
    font-size: 25px;
    cursor: pointer;
  }
`;