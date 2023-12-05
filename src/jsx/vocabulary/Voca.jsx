import VocaMain from "./VocaMain";
import VocaPage from "./VocaPage";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Edit from "./Edit";

import Main from "../../css/StyleVoca";

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
