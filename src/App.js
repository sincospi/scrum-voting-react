import React, { useState } from "react";
import "./styles.css";
import SocketHandler from "./SocketHandler";
import Page from "./Page";

function App() {
  const [appState, setAppState] = useState({
    date: null,
    connectedUsers: [],
    revealVotes: false,
    title: "",
  });
  const [socket, setSocket] = useState(null);
  const [vote, setVote] = useState(window.localStorage.getItem("vote") || "");

  console.debug("APP Re-render");

  return (
    <SocketHandler setSocket={setSocket} setAppState={setAppState}>
      {socket ? (
        <Page
          appState={appState}
          socket={socket}
          vote={vote}
          setVote={setVote}
        />
      ) : (
        <p>Waiting for socket to connect...</p>
      )}
    </SocketHandler>
  );
}

export default App;
