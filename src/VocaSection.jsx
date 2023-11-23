import { useState } from "react";

let VocaList = {
    voca: [
      {
        language: "学生",
        pronunciation: "がくせい",
        meaning: "학생",
      },
    ],
  };

function VocaSection(){
  const [voca, setVoca] = useState(VocaList);
  return (
    <section>
        <h1>{voca.language}</h1>
        
    </section>
    
  );
}

export default VocaSection;