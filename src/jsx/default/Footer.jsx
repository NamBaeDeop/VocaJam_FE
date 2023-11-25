import { FaBook, FaSearch } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import styled from "styled-components";
function Footer() {
  return (
    <>
      <Foot>
        <FaBook className="icon" />
        <FaSearch className="icon" />
        <IoGameController className="icon" />
      </Foot>
    </>
  );
}

export default Footer;

const Foot = styled.footer`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #a97362;

  .icon {
    font-size: 30px;
  }
`;
