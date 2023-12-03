import React from "react";
import { useState, useEffect } from "react";
import VocaModal from "./VocaModal";
import Card from "../../css/VocaCard";


export default function VocaCard(lang, data){

        const [voca, setVoca] = useState([]);
        const langValue = lang.lang;
        console.log(lang, langValue);

        const [modalWord, setModalWord] = useState(null);
        const [showModal, setShowModal] = useState(false);

        const getData = async () => {
            try {
                const response = await fetch(`./data/dummy${langValue}.json`);
                const data = await response.json();
                // console.log(data[0].word);
                setVoca(data);
            } catch (error) {
                console.error('어 패치 실패했어~', error);
            }
        }
    
        useEffect(() => {
            getData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [langValue]);

        // const openModal = (clickedWord) => {
        //     console.log(clickedWord, "openmodal");
        //     // setModalWord(word);
        //     <VocaModal word={clickedWord} />;
        // }   

        const openModal = (clickedWord) => {
            console.log(clickedWord, "clickedWord");
            setModalWord(clickedWord);
            setShowModal(true);
        };
    
        const closeModal = () => {
            setShowModal(false);
            setModalWord(null);
        };
    

    return (
        <>
            {voca.length > 0 ? (
                <>
                    {voca.map((item) => (
                        <Card className="card" key={item.id}>
                            <div className="con card_top">
                                <span className="word">{item.word}</span>
                                <span className="word to_modal" onClick={()=> {
                                    openModal(item);
                                    // console.log(voca[item.id-1]);
                                }}>&middot;&middot;&middot;</span>
                            </div>
                            <span className={`con pronounciation ${lang === "EN"? "remove":""}`}>{item.pronunciation}</span>
                            <span className="con meaning">{item.meaning}</span>
                        </Card>
                    ))}
                </>
            ) : (
                <span>Loading...</span>
            )}
              {showModal && <VocaModal lang={lang} word={modalWord} onClose={closeModal} />}
        </>
    )
}