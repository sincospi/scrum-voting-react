import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ socket }) =>
    socket.connected ? "#aef4be" : "#DB212F"};
  color: ${({ socket }) => (socket.connected ? "auto" : "white")};
  text-align: center;
  padding: 4px;
`;

export default function ConnectionRubbon({ socket }) {
  return (
    <StyledDiv socket={socket}>
      {socket.connected ? "Connected" : "You are NOT connected"}
    </StyledDiv>
  );
}
