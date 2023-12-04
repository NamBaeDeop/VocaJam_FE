import styled from "styled-components";

const Finish = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .scoreBox {
    width: 100%;
    height: 35%;
    font-size: 25px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .score {
    font-size: 35px;
  }
  .btnBox {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .btnBox div {
    width: 200px;
    height: 61px;
    font-size: 20px;
    color: white;
    border-radius: 20px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #966846;
    cursor: pointer;
  }
`;
export default Finish;
