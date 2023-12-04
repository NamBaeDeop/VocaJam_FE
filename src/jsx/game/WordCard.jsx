function WordCard(props) {
  return (
    <>
      <li className="word">
        <p className="foreignLanguage">{props.x.word}</p>
        <p className={`pronunciation ${props.lan == "en" ? "remove" : ""}`}>
          {props.x.pronunciation}
        </p>
        <p className="mean">{props.x.meaning}</p>
      </li>
    </>
  );
}
export default WordCard;
