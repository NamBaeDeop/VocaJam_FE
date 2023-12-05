import styled from "styled-components";

const SearchStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .searchSection {
    margin: 1vh 0 0 2vw;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .searchSection div {
    width: 68%;
    height: 60%;
    border-bottom: 2px solid #a97362;
    display: flex;
    align-items: center;
  }
  input[type="text"] {
    padding-left: 0.5vw;
    width: 95%;
    height: 100%;
    border: none;
    color: #2e1402;
    font-size: 17px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    position: relative;
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
    left: 2vw;
    cursor: pointer;
  }
  .remove {
    display: none;
  }
  .resultSection {
    width: 100%;
    height: 90%;
  }
`;

export default SearchStyle;
