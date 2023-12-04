import { FaBook, FaSearch } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import "../../css/DefaultStyle.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <Link to="/">
          <FaBook className="icon" />
        </Link>
        <Link to={"/search"}>
          <FaSearch className="icon" />
        </Link>
        <Link to={"/game"}>
          <IoGameController className="icon" />
        </Link>
      </footer>
    </>
  );
}

export default Footer;
