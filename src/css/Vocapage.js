import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FAEED6;
    height: 70%;
    padding-top: 20px;

    & > h1{
        width: 270px;
        margin-top: 30px;
        font-size : 25px;
    }

`

export const TitleBtnWrap = styled.div`
    display : flex;
    width : 275px;
    justify-content: space-between;
    align-items: center;
`

export const GotoAdd = styled.div`
    display : flex;
    width : 30px;
    height : 30px;
    background-color: #33160D;
    justify-content: center;
    border-radius : 5px;
    font-size : 20px;
    font-weight : bold;
    color : #FAEED6;
    cursor : pointer;
`

