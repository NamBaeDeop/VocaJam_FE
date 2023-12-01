import React from "react";
import { useState, useEffect } from "react";
import '../../css/vocaCard.css';

export default function VocaCard(lang){

        const [voca, setVoca] = useState([]);
        const langValue = lang.lang;

        const getData = async () => {
            try {
                const response = await fetch(`./data/dummy${langValue}.json`);
                const data = await response.json();
                console.log(data);
                setVoca(data);
            } catch (error) {
                console.error('어 패치 실패했어~', error);
            }
        }
    
        useEffect(() => {
            getData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [langValue]);

    return (
        <>
            {/* <div className="card"> */}
                {/* <div className="con card_top">
                {voca ? <span className="word">{voca[0]?.word}</span> : null}
                <span className="word to_modal">&middot;&middot;&middot;</span>
                </div>
                {voca ? <span className="con pronunciation">&#91;{voca[0]?.pronunciation}&#93;</span> : null}
                {voca ? <span className="con meaning">{voca[0]?.meaning}</span> : null} */}

                {voca.length > 0 ? (
                    <>
                        {voca.map((item) => (
                            <div className="card" key={item.id}>
                                <div className="con card_top">
                                    <span className="word">{item.word}</span>
                                    <span className="word to_modal" onClick={(e)=> {
                                        console.log(e.target.parentNode);
                                    }}>&middot;&middot;&middot;</span>
                                </div>
                                <span className={`con pronounciation ${lang === "EN"? "remove":""}`}>{item.pronunciation}</span>
                                <span className="con meaning">{item.meaning}</span>
                            </div>
                        ))}
                    </>
                ) : (
                    <span>Loading...</span>
                )}
            {/* </div> */}
        </>
    )
}