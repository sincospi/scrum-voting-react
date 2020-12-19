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
const Vote = styled.b`
  font-size: ${({ vote }) => (vote.toString().length <= 3 ? "1em" : "0.5em")};
`;

export default function UserVoted({ className, user, revealVote }) {
  const vote = revealVote ? user.vote : "***";
  return (
    <StyledLi className={className}>
      <Name>{user.name || user.id}</Name>
      <Vote vote={vote}>{vote}</Vote>
    </StyledLi>
  );
}
