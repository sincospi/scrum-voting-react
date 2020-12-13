import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { mediaDevices } from "../theme";

const StyledSubject = styled.div`
  padding: 20px;
  font-size: 30px;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(174, 244, 190, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  ${mediaDevices.mobile} {
    border-radius: 0;
  }
`;

export default function VotingSubject({ className, appState, socket }) {
  console.debug("TitleForm re-render");
  const [title, setTitle] = useState(appState.title);
  const [editing, setEditing] = useState(false);

  console.debug("title vs appState.title", title, appState.title);

  function handleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleBlur() {
    console.debug("New title", title);
    socket.emit("setTitle", { title });
    setEditing(false);
  }

  function startEditing() {
    setTitle(appState.title);
    setEditing(true);
  }

  return editing ? (
    <TextField
      id="voting-subject"
      className={className}
      label="Vote Subject"
      multiline
      rows={4}
      defaultValue={title}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
    />
  ) : (
    <StyledSubject className={className} onClick={startEditing}>
      {appState.title || "Click here to set what we are voting on!"}
    </StyledSubject>
  );
}
