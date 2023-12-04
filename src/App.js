import Game from "./jsx/game/Game";
import Search from "./jsx/search/Search";
import VocaPage from "./jsx/vocabulary/VocaPage";
import Voca from "./jsx/vocabulary/Voca";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/voca" element={<VocaPage />} />
        <Route path="/" element={<Voca />} />
        <Route path="/search" element={<Search />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
