import React from "react";
import { useState, useEffect } from "react";
// import '../../css/vocaModal.css';
import {Modal, TitleExit, TopCon, Btns, Btn} from '../../css/VocaModal';

export default function VocaModal(lang){

    const [voca, setVoca] = useState([]);
    
    const getData = async () => {
        try {
            const response = await fetch('./data/dummyChinese.json');
            const data = await response.json();
            console.log(data);
            setVoca(data);
        } catch (error) {
            console.error('어 패치 실패했어~', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Modal>
                <TitleExit>
                    {voca ? <TopCon className="word">{voca[0]?.word}</TopCon> : null}
                    <TopCon className="exit">X</TopCon>
                </TitleExit>
                <Btns>
                    <Btn>수정</Btn>
                    <Btn>삭제</Btn>
                </Btns>
            </Modal>
        </>
    )
}