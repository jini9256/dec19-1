import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Letter from "./Letter";

const Letterbox = () => {
  const letter = useSelector((state) => state.letters);

  return (
    <StBox>
      <h2>-Letter Box-</h2>
      <p>π {letter.length}κ°μ νΈμ§κ° μμ΅λλ€.</p>

      {letter.map((item) => {
        return <Letter letter={item} key={item.id} />;
      })}
    </StBox>
  );
};

export default Letterbox;

const StBox = styled.div`
  background-color: #ffc7c7;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
