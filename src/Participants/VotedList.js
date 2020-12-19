import React from "react";
import UserList from "./UserList";
import User from "./UserVoted";

export default function VotedList({ className, appState }) {
  const users = appState.connectedUsers
    .filter((u) => !!u.vote)
    .sort((a, b) => {
      if (appState.revealVotes) {
        if (isNaN(a.vote) && isNaN(b.vote)) {
          return (a.name || a.id).localeCompare(b.name || b.id);
        }
        if (isNaN(a.vote)) {
          return 1;
        }
        if (isNaN(b.vote)) {
          return -1;
        }
        return parseInt(b.vote) - parseInt(a.vote);
      } else {
        return (a.name || a.id).localeCompare(b.name || b.id);
      }
    })
    .map((user) => (
      <User key={user.id} user={user} revealVote={appState.revealVotes} />
    ));
  return <UserList className={className}>{users}</UserList>;
}
