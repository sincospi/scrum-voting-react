import React from "react";
import styled from "styled-components";

import WaitingList from "./WaitingList";
import VotedList from "./VotedList";
import ButtonReveal from "./ButtonReveal";

import applyNameScoreGrid from "./nameScoreGrid";

import { mediaDevices } from "../theme";

const StyledSection = styled.section`
  margin: 50px 0;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1.75fr) minmax(400px, 2fr) 1fr;
  column-gap: 20px;
  grid-template-areas:
    ". waiting-header voted-header ."
    ". waiting-list voted-list .";
  grid-template-rows: auto;

  & > .waiting-header {
    grid-area: waiting-header;
  }
  & > .voted-header {
    grid-area: voted-header;
  }
  & > .waiting-list {
    grid-area: waiting-list;
  }
  & > .voted-list {
    grid-area: voted-list;
  }

  ${mediaDevices.tablet} {
    margin: 10px;
    grid-template-columns: 1.75fr 2fr;
    grid-template-areas:
      "waiting-header voted-header"
      "waiting-list voted-list";
  }

  ${mediaDevices.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "waiting-header"
      "waiting-list"
      "voted-header"
      "voted-list";
    & > .voted-header {
      margin-top: 20px;
    }
  }
`;

const ListHeader = styled.div`
  padding: 5px;
  border-bottom: 1px solid rgba(212, 221, 228, 1);
`;

const VotedListHeader = applyNameScoreGrid(ListHeader);

export default function ParticipantsSection({ appState, socket }) {
  return (
    <StyledSection>
      <ListHeader className="waiting-header">
        <div>Waiting Area</div>
      </ListHeader>
      <WaitingList
        className="waiting-list"
        appState={appState}
        socket={socket}
      />
      <VotedListHeader className="voted-header">
        <div>Voted</div>
        <ButtonReveal
          socket={socket}
          revealVotes={appState?.revealVotes}
          voteCount={appState?.connectedUsers.filter((u) => u.vote).length}
        />
      </VotedListHeader>
      <VotedList className="voted-list" appState={appState} socket={socket} />
    </StyledSection>
  );
}
