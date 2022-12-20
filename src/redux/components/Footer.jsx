import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFoot>
      <span>H.W.</span>
    </StFoot>
  );
};

export default Footer;

const StFoot = styled.div`
  background-color: #aaaaaa;
  padding: 0px 20px;
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  justify-content: center;
  box-align: center;
  align-items: center;
`;
