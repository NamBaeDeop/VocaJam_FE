import styled from "styled-components";

const SearchStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;

  .searchSection {
    margin-top: 1vh;
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
    width: 80%;
    height: 100%;
    border: none;
    color: #2e1402;
    font-size: 17px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    position: relative;
  }
  .searchIcon {
    font-size: 23px;
    color: #2e1402;
    position: relative;
    left: 1vw;
  }
  .chooseLanguage {
    font-size: 23px;
    position: absolute;
    left: 1.5vw;
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