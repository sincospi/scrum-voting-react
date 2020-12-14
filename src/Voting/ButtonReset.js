import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonReset({ socket, setVote, revealVotes }) {
  function onClick() {
    // if (confirm("Are you sure?")) {
    console.debug("Reset clicked!");
    window.localStorage.removeItem("vote");
    socket.emit("reset", { reset: true });
    setVote("");
    // }
  }

  return (
    <Button
      className="button-voting-reset"
      variant="contained"
      color="secondary"
      onClick={onClick}
      disabled={!revealVotes}
    >
      Reset
    </Button>
  );
}
