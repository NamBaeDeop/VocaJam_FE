import styled from "styled-components";

const AddForm = styled.main`
  background-color: #faeed6;

  .WordBox {
    display: flex;
    flex-direction: column;
    padding-left: 33px;
    padding-top: 25px;
    /*  */
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
    padding-top: 100px;
    padding-left: 258px;
    padding-bottom: 20px;
  }
  .AddBtn {
    width: 69px;
    height: 35.61px;
    border-radius: 10px;
    border-style: none;
    background-color: #82502b;
    color: #f9e2d3;
    font-size: 16px;
    font-style: 2e1402;
    cursor: pointer;
  }
  input {
    font-size: 18px;
    text-indent: 10px;
    outline: none;
  }
`;

export default AddForm;
