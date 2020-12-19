import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import SocketHandler, { disconnectedSocket } from "./SocketHandler";
import Page from "./Page";

function App() {
  const [appState, setAppState] = useState({
    date: null,
    connectedUsers: [],
    revealVotes: false,
    title: "",
  });
  const [socket, setSocket] = useState(disconnectedSocket);
  const [vote, setVote] = useState(window.localStorage.getItem("vote") || "");

  console.debug("APP Re-render");

  return (
    <>
      <GlobalStyle />
      <SocketHandler setSocket={setSocket} setAppState={setAppState}>
        <Page
          appState={appState}
          socket={socket}
          vote={vote}
          setVote={setVote}
        />
      </SocketHandler>
    </>
  );
}

export default App;
