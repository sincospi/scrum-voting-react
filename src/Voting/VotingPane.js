import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    window.localStorage.setItem("vote", newVote);
    socket.emit("setVote", { vote: newVote });
  }

  function buttonVoteOnClick(newVote) {
    setVote(newVote);
    saveVote(newVote);
  }

  const voteButtons = [1, 2, 3, 5, 8, 13, 21, 34, "?"].map((n) => (
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
    <>
      <b>Your vote:</b>
      <ButtonGroup
        variant="contained"
        color="primary"
        size="medium"
        aria-label="contained primary button group"
      >
        {voteButtons}
      </ButtonGroup>
      <div>
        <input
          style={isHidden ? { color: "#fff" } : {}}
          type="text"
          value={vote}
          onChange={handleChange}
          onBlur={() => saveVote(vote)}
        />
        <FormControlLabel control={checkBox} label="Hide" />
      </div>
    </>
  );
}
