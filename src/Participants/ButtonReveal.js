import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonReveal({ socket, revealVotes, voteCount }) {
  function onClick() {
    socket.emit("reveal", { reveal: true });
  }
  return (
    <Button
      variant="contained"
      size="small"
      color="primary"
      onClick={onClick}
      disabled={!voteCount || revealVotes}
    >
      Reveal
    </Button>
  );
}
