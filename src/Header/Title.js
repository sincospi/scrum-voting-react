import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  text-align: center;
  padding: 20px 0;
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
      <span>Your VOTE counts!</span>
    </StyledTitle>
  );
}