import styled from "styled-components";

const Div = styled.main`
  .EditForm {
    background-color: #faeed6;
    width: 360px;
    height: 550px;
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
  .EditWord {
    padding-bottom: 10px;
    font-style: 2e1402;
    font-size: 21px;
    font-weight: bold;
  }
  .EditMean {
    padding-bottom: 10px;
    font-style: 2e1402;
    font-size: 21px;
    font-weight: bold;
  }
  .EditPron {
    padding-bottom: 10px;
    font-style: 2e1402;
    font-size: 21px;
    font-weight: bold;
  }
  .Word {
    width: 295px;
    height: 44px;
    background-color: #d4af9a;
    border-radius: 0px 10px 10px 10px;
    border-style: none;
    padding-left: 7px;
  }
  .Meaning {
    width: 295px;
    height: 44px;
    background-color: #d4af9a;
    border-radius: 0px 10px 10px 10px;
    border-style: none;
    padding-left: 7px;
  }

  .Pronunciation {
    width: 295px;
    height: 44px;
    background-color: #d4af9a;
    border-radius: 0px 10px 10px 10px;
    border-style: none;
    padding-left: 7px;
  }
  .EditBox {
    padding-top: 100px;
    padding-left: 258px;
    padding-bottom: 20px;
  }
  .EditBtn {
    width: 69px;
    height: 35.61px;
    font-size: 16px;
    font-style: 2e1402;
    border-radius: 10px;
    border-style: none;
    background-color: #82502b;
    color: #f9e2d3;
    cursor: pointer;
  }
  input {
    text-indent: 10px;
    font-size: 18px;
    outline: none;
  }
  .ab {
    position: absolute;
  }
`;
export default Div;
