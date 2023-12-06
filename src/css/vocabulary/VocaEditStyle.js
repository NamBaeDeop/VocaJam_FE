import styled from "styled-components";

const Div = styled.main`
  .EditForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 85%;
    height: 20%;
    display: flex;
    justify-content: space-between;
  }
  .EditBtn {
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
    text-indent: 10px;
    font-size: 18px;
    outline: none;
  }
  .ab {
    position: absolute;
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
  form input:focus:invalid {
    outline: auto;
    outline-color: red;
  }
  .inputSection {
    width: 100%;
    height: 80%;
  }
`;
export default Div;
