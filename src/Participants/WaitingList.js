import React from "react";
import UserList from "./UserList";
import User from "./UserWaiting";

export default function WaitingList({ className, appState }) {
  const users = appState.connectedUsers
    .filter((u) => !u.vote)
    .sort((a, b) => (a.name || a.id).localeCompare(b.name || b.id))
    .map((user) => <User key={user.id} user={user} />);
  return <UserList className={className}>{users}</UserList>;
}
