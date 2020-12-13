import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;

  background-color: rgba(212, 221, 228, 0.3);
  padding: 5px;
  margin: 6px 0;
  border-radius: 6px;
`;

export default function UserWaiting({ className, user }) {
  return <StyledLi className={className}>{user.name || user.id}</StyledLi>;
}
