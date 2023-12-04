import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faeed6;
  // height: 70%;
  padding-top: 20px;

  & > h1 {
    width: 270px;
    margin-top: 30px;
    font-size: 25px;
  }
  h1 {
    font-size: 25px;
  }

  .TitleBtnWrap {
    display: flex;
    width: 275px;
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
`;
export default Main;

// export const TitleBtnWrap = styled.div`

// `

// export const GotoAdd = styled.div`
//     display : flex;
//     width : 30px;
//     height : 30px;
//     background-color: #33160D;
//     justify-content: center;
//     border-radius : 5px;
//     font-size : 20px;
//     font-weight : bold;
//     color : #FAEED6;
//     cursor : pointer;
// `
