import styled from "styled-components";

const CardStyle = styled.li`
  width: 267px;
  height: 97px;
  background-color: #d4af9a;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 20px;
  }

  .card_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .con {
    width: 100%;
  }

  .word {
    font-size: 23px;
    font-weight: 900;
  }

  .to_modal {
    cursor: pointer;
  }

  .pronunciation {
    font-size: 14px;
  }

  .meaning {
    font-size: 20px;
  }

  .remove {
    display: none;
  }
`;

export default CardStyle;
