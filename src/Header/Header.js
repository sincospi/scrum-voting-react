import React from "react";
import styled from "styled-components";

import Timestamp from "./Timestamp";
import Title from "./Title";
import NameForm from "./NameForm";

import { mediaDevices } from "../theme";

const StyledHeader = styled.section`
  margin-bottom: 20px;
  background-color: rgba(212, 221, 228, 0.3);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "time title name";

  ${mediaDevices.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "time name";
  }

  ${mediaDevices.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "time"
      "title"
      "name";
  }

  & > .timestamp {
    grid-area: time;
    align-self: center;
  }

  & > .title {
    grid-area: title;
    align-self: center;
  }

  & > .name {
    grid-area: name;
    align-self: center;
    margin: 10px;
  }
`;

export default function Header({ appState, socket }) {
  return (
    <StyledHeader>
      <Timestamp className="timestamp" timestamp={appState.date} />
      <Title className="title" />
      <NameForm className="name" appState={appState} socket={socket} />
    </StyledHeader>
  );
}
