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
        <p
          className="en"
          onClick={(e) => {
            props.setLan(e.target.className);
            props.setPop("remove");
          }}
        >
          영어
        </p>
        <p
          className="cn"
          onClick={(e) => {
            props.setLan(e.target.className);
            props.setPop("remove");
          }}
        >
          중국어
        </p>
        <p
          className="jp"
          onClick={(e) => {
            props.setLan(e.target.className);
            props.setPop("remove");
          }}
        >
          일본어
        </p>
      </div>
    </LanguageBox>
  );
}

export default Language;
