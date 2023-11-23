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
                <div >
                    <h1>{voca[0].word}</h1>
                    {/* map이나 filter 활용 */}
                    <h2>X</h2>
                </div>
                <div >
                    <div className="btn">수정</div>
                    <div className="btn">삭제</div>
                </div>
            </div>
        </>
    )
}