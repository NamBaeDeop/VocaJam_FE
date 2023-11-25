import React from "react";
import { useState, useEffect } from "react";
import '../../css/vocaModal.css';

export default function VocaModal(){

    const [voca, setVoca] = useState([]);

    const getData=()=>{
        fetch('./data/dummyChinese.json')
        .then((res) => res.json())
        .then((data)=>{
            console.log(data);
            setVoca(data);
        })}

      useEffect(()=>{
        getData()
      },[])


    return (
        <>
            <div className="modal">
                <div className="title_exit">
                    {voca ? <div className="top_con word">{voca[0]?.word}</div> : null}
                    {/* map이나 filter 활용 */}
                    <div className="top_con exit">X</div>
                </div>
                <div className="btns">
                    <div className="btn">수정</div>
                    <div className="btn">삭제</div>
                </div>
            </div>
        </>
    )
}