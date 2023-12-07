import { IoSearch } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
import { useEffect, useRef, useState, useContext } from "react";
import { GameContext } from "../../App";
import SearchStyle from "../../css/search/SearchStyle";
import WordCardStyle from "../../css/game/WordCardStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Language from "../game/Language";
import WordCard from "../game/WordCard";
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const langArr = ["영어", "중국어", "일본어"];
  const langKey = ["en", "cn", "jp"];

  const { lang, setPopLang } = useContext(GameContext);

  const fetchFunc = async (e) => {
    try {
      let response = await fetch(
        `http://localhost:8070/search/${lang}?Search_Word=${e.target.value}`
      );
      let dataArr = await response.json();
      setSearchResult(dataArr);
    } catch (err) {
      console.log("err", err);
    }
  };

  const searchFunc = (e) => {
    if (e.key == "Enter") {
      fetchFunc(e);
    }
  };

  useEffect(() => {
    setSearchResult([]);
  }, [lang]);

  return (
    <>
      <Header />
      <SearchStyle>
        <Language search={true} />
        <div className="searchSection">
          <FaGlobeAsia
            className="chooseLanguage"
            onClick={() => {
              setPopLang(true);
            }}
          />
          <span className="currentLanguage">
            {langArr[langKey.indexOf(lang)]}
          </span>
          <div>
            <input
              type="text"
              placeholder="검색어를 입력해 주세요"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  fetchFunc(e);
                }
              }}
            />
            <IoSearch className="searchIcon" onClick={searchFunc} />
          </div>
        </div>
        <section className="resultSection">
          <WordCardStyle>
            {searchResult.map((x) => (
              <WordCard x={x} lang={lang} />
            ))}
          </WordCardStyle>
        </section>
      </SearchStyle>
      <Footer />
    </>
  );
}

export default Search;
