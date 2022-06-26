import React, { useState } from "react";
import "./ChatInput.css";
import Button from "@mui/material/Button";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        avatar: user.photoURL,
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          ENVOYER
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
