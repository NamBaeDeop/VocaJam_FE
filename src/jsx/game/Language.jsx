import LanguageBox from "../../css/game/LanguageStyle";
function Language(props) {
  return (
    <LanguageBox className={`${props.pop} ${"language"}`}>
      <span
        onClick={() => {
          props.setPop("remove");
        }}
      >
        x
      </span>
      <div className="languageBox">
        <p>영어</p>
        <p>일본어</p>
        <p>중국어</p>
      </div>
    </LanguageBox>
  );
}

export default Language;
