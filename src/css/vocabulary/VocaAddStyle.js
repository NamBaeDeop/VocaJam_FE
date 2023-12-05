import styled from "styled-components";

const Div = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .formSction {
    width: 100%;
    height: 80%;
  }
  .WordBox {
    display: flex;
    flex-direction: column;
    padding-left: 33px;
    padding-top: 25px;
  }
  .MeanBox {
    display: flex;
    flex-direction: column;
    padding-left: 33px;
    padding-top: 25px;
  }
  .PronBox {
    display: flex;
    flex-direction: column;
    padding-left: 33px;
    padding-top: 25px;
  }
  .AddWord {
    font-style: 2e1402;
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .AddMean {
    font-style: 2e1402;
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .AddPron {
    font-style: 2e1402;
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .Word {
    background-color: #d4af9a;
    border-style: none;
    width: 295px;
    height: 44px;
    border-radius: 0px 10px 10px 10px;
  }
  .Meaning {
    background-color: #d4af9a;
    border-style: none;
    width: 295px;
    height: 44px;
    border-radius: 0px 10px 10px 10px;
  }
  .Pronunciation {
    background-color: #d4af9a;
    border-style: none;
    width: 295px;
    height: 44px;
    border-radius: 0px 10px 10px 10px;
  }
  .AddBox {
    width: 85%;
    height: 20%;
    display: flex;
    justify-content: space-between;
  }
  .back {
    width: 80px;
    height: 36px;
    font-size: 17px;
    font-style: 2e1402;
    border-radius: 10px;
    border-style: none;
    background-color: #82502b;
    color: #f9e2d3;
    cursor: pointer;
  }
  .AddBtn {
    width: 80px;
    height: 36px;
    font-size: 17px;
    font-style: 2e1402;
    border-radius: 10px;
    border-style: none;
    background-color: #82502b;
    color: #f9e2d3;
    cursor: pointer;
  }
  input {
    font-size: 18px;
    text-indent: 10px;
    outline: none;
  }
`;

export default Div;
