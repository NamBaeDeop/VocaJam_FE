import styled from "styled-components";

const Wrong = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-top: 3vh;
  }
  .retry {
    margin: 15px 0 15px 0;
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
export default Wrong;
