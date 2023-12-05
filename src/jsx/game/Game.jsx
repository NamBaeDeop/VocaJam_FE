import { useContext, useRef, useState } from "react";
import { GameContext } from "../../App";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Main from "../../css/game/GameStyle";
import GamePlay from "./GamePlay";

function Game() {
  return (
    <>
      <Header />
      <Main>
        <GamePlay />
      </Main>
      <Footer />
    </>
  );
}

export default Game;
