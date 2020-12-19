import { useEffect } from "react";
import { io } from "socket.io-client";

export const disconnectedSocket = {
  connected: false,
  emit: (name, payload) =>
    console.log("Cannot emit because you are not connected", name, payload),
};

export default function SocketHandler({ children, setSocket, setAppState }) {
  useEffect(() => {
    const serverURI = process.env.REACT_APP_SERVER_URI;
    console.log(`Connecting to "${process.env.NODE_ENV}" server`, serverURI);
    console.debug("-------- App useEffect ----------- !!!");

    const new_socket = io(serverURI, {
      transports: ["websocket"],
    });

    new_socket.on("connect", () => {
      setSocket(new_socket);
      console.debug("socket.connected", new_socket.connected);
      const existing_name = window.sessionStorage.getItem("name");
      const existing_vote = window.sessionStorage.getItem("vote");
      if (existing_name || existing_vote) {
        new_socket.emit("initUser", {
          name: existing_name,
          vote: existing_vote,
        });
      }
    });

    new_socket.on("disconnect", () => {
      setSocket(disconnectedSocket);
    });

    new_socket.on("FromAPI", (data) => {
      console.debug({ socketId: new_socket.id, data });
      setAppState(data);
    });

    // CLEAN UP THE EFFECT
    return () => {
      console.debug("************* App UseEffect Cleanup *****************");
      new_socket.disconnect();
      new_socket.removeAllListeners();
      setSocket(null);
    };
  }, [setSocket, setAppState]);
  return children;
}
