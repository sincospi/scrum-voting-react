import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import SocketHandler from "./SocketHandler";
import Page from "./Page";

function App() {
  const [appState, setAppState] = useState({
    date: null,
    connectedUsers: [],
    revealVotes: false,
    title: "",
  });
  const [socket, setSocket] = useState({ connected: false });
  const [vote, setVote] = useState(window.sessionStorage.getItem("vote") || "");

  console.debug("APP Re-render");

  return (
    <SocketHandler setSocket={setSocket} setAppState={setAppState}>
      <GlobalStyle />
      <Page appState={appState} socket={socket} vote={vote} setVote={setVote} />
    </SocketHandler>
  );
}

export default App;
