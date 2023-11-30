import React from "react";
import VocaCard from "./VocaCard";
import Section from "../../css/Vocapage";

export default function VocaPage() {
  return (
    <>
      <Section>
        <h1>일본어</h1>
        <VocaCard />
        {/* map으로 반복 */}
      </Section>
    </>
  );
}
