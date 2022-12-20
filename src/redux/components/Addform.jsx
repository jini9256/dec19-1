import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addLetter } from "../modules/letters";
import { v4 as uuidv4 } from "uuid";

const Addform = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };
  const submitMode = (event) => {
    event.preventDefault();

    const newLetter = {
      title,
      text,
      id: uuidv4(),
    };

    dispatch(addLetter(newLetter));

    console.log(newLetter);

    setTitle("");
    setText("");
  };

  return (
    <StWrap>
      <StForm onSubmit={submitMode}>
        {/* <label htmlFor="labeltitle">제목</label> */}
        <StInput
          onChange={changeTitle}
          id="labeltitle"
          placeholder="작성자를 입력하세요."
          value={title}
        ></StInput>

        <StInputText
          onChange={changeText}
          value={text}
          placeholder="내용을 입력하세요."
        ></StInputText>

        <StButton>등록</StButton>
      </StForm>
    </StWrap>
  );
};

export default Addform;

const StWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StForm = styled.form`
  background-color: #ffc7c7;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
  text-align: center;
`;

// 텍스트가 들어가는 창은 텍스트에디터를 써도 될듯
const StInputText = styled.input`
  width: 90%;
  min-height: 200px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #eee;
  /* padding: 0 10px; */
  text-align: center;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 60px;
  border-radius: 12px;
  margin: 5px;
`;
