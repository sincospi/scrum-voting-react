import React from "react";
import styled from "styled-components";

import ButtonReset from "./ButtonReset";
import VotingSubject from "./VotingSubject";
import VotingPane from "./VotingPane";

import { mediaDevices } from "../theme";

const VotingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .button-voting-reset {
    margin: 20px 0 10px;
  }

  & .voting-subject {
    width: 80%;
    margin: 20px 0;
  }

  ${mediaDevices.tablet} {
    & .voting-subject {
      width: 90%;
    }
  }

  ${mediaDevices.mobile} {
    & .voting-subject {
      width: auto;
    }
  }
`;

export default function Voting({ appState, socket, vote, setVote }) {
  return (
    <VotingSection>
      <ButtonReset socket={socket} setVote={setVote} />
      <VotingSubject
        className="voting-subject"
        appState={appState}
        socket={socket}
      />
      <VotingPane
        appState={appState}
        socket={socket}
        vote={vote}
        setVote={setVote}
      />
    </VotingSection>
  );
}
