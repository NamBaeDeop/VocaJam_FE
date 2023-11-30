import { FaBook, FaSearch } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import "../../css/DefaultStyle.css";
function Footer() {
  return (
    <>
      <footer>
        <FaBook className="icon" />
        <FaSearch className="icon" />
        <IoGameController className="icon" />
      </footer>
    </>
  );
}

export default Footer;
