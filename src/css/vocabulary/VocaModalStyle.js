import styled from "styled-components";

export const Modal = styled.div`
  width: 250px;
  height: 245px;
  background-color: #efaaaa;
  border-radius: 20px;
  border: 4px solid #c77d7d;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .TitleExit {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .TopCon {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .word {
    width: 80%;
    text-indent: 15px;
    font-size: 27px;
    font-weight: bold;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .exit {
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
  }

  .Btns {
    width: 100%;
    height: 160px;
    display: flex;

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .Btn {
    width: 170px;
    height: 55px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
  }
`;
