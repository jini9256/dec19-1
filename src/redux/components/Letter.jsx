import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delLetter, updateLetter } from "../modules/letters";

const Letter = ({ letter }) => {
  const dispatch = useDispatch();

  const deleteClick = () => {
    if (window.confirm(`[${letter.title}]님의 글을 정말 삭제하시겠습니까?`)) {
      dispatch(delLetter(letter.id));
    }
  };

  return (
    <>
      <StLetter>
        <h3>{letter.title}</h3>
        <span>{letter.text}</span>
        <div>
          <StBtn>수정</StBtn>
          <StBtn onClick={deleteClick}>삭제</StBtn>
        </div>
      </StLetter>
    </>
  );
};

export default Letter;

const StLetter = styled.div`
  border: 1px solid #eee;
  width: 50px;
  height: auto;
  margin: 10px;
  background-color: #ffe2e2;

  width: 90%;
  border-radius: 12px;
  outline: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const StBtn = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 60px;
  border-radius: 12px;
  margin: 5px;
`;
