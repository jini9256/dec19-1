import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      {/* <h1>Letter 📩</h1> */}
      <div>
        <img src="https://4.bp.blogspot.com/-OMs3TyK2sik/UYG_uByulKI/AAAAAAAARDM/juvvvQgepMM/s300/happybirthday.png" />
      </div>

      {/* <div>
        <img src="https://4.bp.blogspot.com/-ov0UFIYNJFE/Ul6CrXf5wlI/AAAAAAAAZJc/0ZDqmQ-lTg0/s600/happynewyear_3.png" />
      </div> */}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  background-color: #aaaaaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-align: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
  border: 1px solid rgb(221, 221, 221);
  height: 250px;
  font-size: large;
`;
