import Header from "../default/Header";
import Footer from "../default/Footer";
import styled from "styled-components";

function Game(props) {
  return (
    <>
      <Header />
      <Main></Main>
      <Footer />
    </>
  );
}

export default Game;

const Main = styled.main`
  width: 100%;
  height: 70%;
  background-color: #faeed6;
`;
