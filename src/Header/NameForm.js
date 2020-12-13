import React, { useState } from "react";
import styled from "styled-components";

const NameField = styled.input`
  font-size: 20px;
  padding: 10px;
`;

export default function NameForm({ appState, socket, className }) {
  const [name, setName] = useState(window.localStorage.getItem("name") || "");
  console.debug("NameForm re-render", name);
  console.debug(
    "Name (from server)",
    appState.connectedUsers.find((user) => user.id === socket?.id)?.name
  );

  function handleChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  function handleBlur() {
    console.debug("New name", name);
    window.localStorage.setItem("name", name);
    socket.emit("setName", { name });
  }

  return (
    <NameField
      className={className}
      value={name}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Your Name"
    />
  );
}
