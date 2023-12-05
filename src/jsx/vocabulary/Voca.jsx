import VocaMain from "./VMain";
import VocaPage from "./VPage";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Edit from "./VEdit";

import Main from "../../css/vocabulary/VocaStyle";

function Voca(props) {
  return (
    <>
      <Header />
      <Main>
        <VocaMain
          pop={props.pop}
          setPop={props.setPop}
          lang={props.lang}
          setLang={props.setLang}
        />
      </Main>
      <Footer />
    </>
  );
}

export default Voca;
