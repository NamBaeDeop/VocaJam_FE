import "../../css/DefaultStyle.css";
// import logoUrl from "../img/noun-jam-3099118.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img
            className="logo"
            src="http://localhost:3000/img/logo.png"
            // src="http://localhost:8070/img/logo.png"
          />
        </Link>
      </header>
    </>
  );
}

export default Header;
