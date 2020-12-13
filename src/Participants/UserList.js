import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default function UserList({ className, children }) {
  return <StyledUl className={className}>{children}</StyledUl>;
}
