import React from "react";
import styled from "styled-components";

import applyNameScoreGrid from "./nameScoreGrid";

const StyledLi = applyNameScoreGrid(styled.li`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;

  background-color: rgba(174, 244, 190, 0.7);
  padding: 5px;
  margin: 6px 0;
  border-radius: 6px;
`);

const Name = styled.span``;
const Vote = styled.b``;

export default function UserVoted({ className, user, revealVote }) {
  let vote = "***";
  if (revealVote) {
    vote = user.vote === "?" ? "¯\\_(ツ)_/¯" : user.vote;
  }
  return (
    <StyledLi className={className}>
      <Name>{user.name || user.id}</Name>
      <Vote>{vote}</Vote>
    </StyledLi>
  );
}
