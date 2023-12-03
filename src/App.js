import { useState } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import VocaPage from './jsx/vocabulary/VocaPage';
// import Game from "./jsx/game/Game";
import Voca from './jsx/vocabulary/vocamain';

function App() {
  // const [Language, setLanguage] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Voca/>} />
          <Route path="/vocabulary/VocaPage" element={<VocaPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
