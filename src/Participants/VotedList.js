import React from "react";
import UserList from "./UserList";
import User from "./UserVoted";

const compareByName = (a, b) => (a.name || a.id).localeCompare(b.name || b.id);

export default function VotedList({ className, appState }) {
  const users = appState.connectedUsers
    .filter((u) => !!u.vote)
    .sort((a, b) => {
      if (!appState.revealVotes) {
        return compareByName(a, b);
      }

      const voteA = Number(a.vote);
      const voteB = Number(b.vote);
      if (voteA && voteB) {
        return voteA === voteB ? compareByName(a, b) : voteB - voteA;
      }
      if (voteA) {
        return -1;
      }
      if (voteB) {
        return 1;
      }
      return compareByName(a, b);
    })
    .map((user) => (
      <User key={user.id} user={user} revealVote={appState.revealVotes} />
    ));
  return <UserList className={className}>{users}</UserList>;
}
