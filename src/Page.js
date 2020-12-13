import React from "react";

import Header from "./Header/Header";
import VotingSection from "./Voting/VotingSection";
import ParticipantsSection from "./Participants/ParticipantsSection";
import Footer from "./Footer";

export default function Page({ appState, socket, vote, setVote }) {
  console.debug("Page re-render");
  return (
    <>
      <Header appState={appState} socket={socket} />
      <VotingSection
        appState={appState}
        socket={socket}
        vote={vote}
        setVote={setVote}
      />
      <ParticipantsSection appState={appState} socket={socket} />
      <Footer />
    </>
  );
}
