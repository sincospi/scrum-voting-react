import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonReveal({ socket }) {
  function onClick() {
    socket.emit("reveal", { reveal: true });
  }
  return (
    <Button variant="contained" size="small" color="primary" onClick={onClick}>
      Reveal
    </Button>
  );
}
