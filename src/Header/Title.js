import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #3f51b5;
  font-weight: bold;
  & > span:nth-child(1) {
    font-size: 30px;
  }
  & > span:nth-child(2) {
    font-size: 10px;
  }
`;

export default function Title({ className }) {
  return (
    <StyledTitle className={className}>
      <span>&lt;ScrumVoting /&gt;</span>
      <br />
      <i>Your VOTE counts!</i>
    </StyledTitle>
  );
}
