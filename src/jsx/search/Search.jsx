import { IoSearch } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SearchStyle from "../../css/search/SearchStyle";
import WordCardStyle from "../../css/game/WordCardStyle";
import Header from "../default/Header";
import Footer from "../default/Footer";
import Language from "../game/Language";
import WordCard from "../game/WordCard";
function Search() {
  const [lan, setLan] = useState("en");
  const [pop, setPop] = useState("remove");
  const [searchResult, setSearchResult] = useState([]);

  const fetchFunc = async (e) => {
    try {
      let response = await fetch(
        `http://localhost:8070/search/${lan}?Search_Word=${e.target.value}`
      );
      let dataArr = await response.json();
      setSearchResult(dataArr);
    } catch (err) {
      console.log("err", err);
    }
  };

  const searchFunc = (e) => {
    console.log(e.targte);
    if (e.key == "Enter") {
      fetchFunc(e);
    }
  };

  useEffect(() => {
    setSearchResult([]);
  }, [lan]);

  return (
    <>
      <Header />
      <SearchStyle>
        <Language pop={pop} setPop={setPop} setLan={setLan} />
        <div className="searchSection">
          <FaGlobeAsia
            className="chooseLanguage"
            onClick={() => {
              setPop("");
            }}
          />
          <div>
            <input
              type="text"
              placeholder="검색어를 입력해 주세요"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  // console.log(e.target);
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
              <WordCard x={x} lan={lan} />
            ))}
          </WordCardStyle>
        </section>
      </SearchStyle>
      <Footer />
    </>
  );
}

export default Search;
