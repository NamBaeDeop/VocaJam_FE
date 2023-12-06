import styled from "styled-components";

const SearchStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .searchSection {
    margin: 1vh 0 0 0vw;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* background-color: yellowgreen; */
  }
  .searchSection div {
    margin-left: 20px;
    width: 68%;
    height: 60%;
    border-bottom: 2px solid #a97362;
    display: flex;
    align-items: center;
  }
  input[type="text"] {
    width: 85%;
    height: 100%;
    border: none;
    color: #2e1402;
    text-indent: 10px;
    font-size: 17px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
  }
  input::placeholder {
    color: #a88469;
  }
  .searchIcon {
    font-size: 30px;
    color: #2e1402;
    position: relative;
    cursor: pointer;
  }
  .chooseLanguage {
    font-size: 30px;
    position: absolute;
    left: 15px;
    cursor: pointer;
  }
  .currentLanguage {
    position: absolute;
    top: 55px;
    left: 15px;
  }
  .remove {
    display: none;
  }
  .resultSection {
    margin-top: 30px;
    width: 100%;
    height: 80%;
    background-color: yellowgreen;
  }
`;

export default SearchStyle;
