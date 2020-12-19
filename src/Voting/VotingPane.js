import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";

import { mediaDevices } from "../theme";

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: 10px;
`;

const VoteInput = styled.input`
  padding: 6px;
`;

const VoteLayout = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  row-gap: 10px;
  /* grid-template-rows: 100px 100px 100px; */
  grid-template-areas:
    "label label"
    "left right"
    "input input";

  & #vote-label {
    grid-area: label;
    justify-self: center;
  }
  & #vote-button-group-1 {
    grid-area: left;
    justify-self: center;
  }
  & #vote-button-group-2 {
    grid-area: right;
  }
  & #vote-input-form {
    grid-area: input;
    justify-self: center;
  }

  ${mediaDevices.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "label"
      "left"
      "right"
      "input";
  }
`;

export default function VotingPane({ appState, socket, vote, setVote }) {
  const [isHidden, setIsHidden] = useState(false);
  console.debug("VotePane re-render");
  console.debug(
    "Vote (from server)",
    appState.connectedUsers.find((user) => user.id === socket?.id)?.vote
  );

  function handleChange(event) {
    const new_vote = event.target.value;
    setVote(new_vote);
  }

  function saveVote(newVote) {
    window.sessionStorage.setItem("vote", newVote);
    socket.emit("setVote", { vote: newVote });
  }

  function buttonVoteOnClick(newVote) {
    setVote(newVote);
    saveVote(newVote);
  }

  const voteButtons1 = [1, 2, 3, 5, 8].map((n) => (
    <Button key={n} onClick={() => buttonVoteOnClick(n)}>
      {n}
    </Button>
  ));
  const voteButtons2 = [13, 21, 34, "🤔", "🤯"].map((n) => (
    <Button key={n} onClick={() => buttonVoteOnClick(n)}>
      {n}
    </Button>
  ));

  const checkBox = (
    <Checkbox
      checked={isHidden}
      onChange={() => setIsHidden((old) => !old)}
      color="default"
      inputProps={{ "aria-label": "checkbox with default color" }}
    />
  );

  return (
    <VoteLayout>
      <b id="vote-label">Your vote:</b>
      <StyledButtonGroup
        id="vote-button-group-1"
        variant="contained"
        color="primary"
        size="large"
        aria-label="contained primary button group"
      >
        {voteButtons1}
      </StyledButtonGroup>
      <StyledButtonGroup
        id="vote-button-group-2"
        variant="contained"
        color="primary"
        size="large"
        aria-label="contained primary button group"
      >
        {voteButtons2}
      </StyledButtonGroup>
      <div id="vote-input-form">
        <VoteInput
          style={isHidden ? { color: "#fff" } : {}}
          type="text"
          value={vote}
          onChange={handleChange}
          onBlur={() => saveVote(vote)}
        />
        <FormControlLabel control={checkBox} label="Hide" />
      </div>
    </VoteLayout>
  );
}
