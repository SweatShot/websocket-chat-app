import { useEffect, useState } from "react";
import { Body } from "./components/body/body";
import { MessageBlock } from "./components/message-block/message-block";
import { Sidebar } from "./components/sidebar/sidebar";
import styles from "./styles.module.css";

export const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on('responseTyping', (data) => {
      setStatus(data)
      setTimeout(() => {
        setStatus('')
      }, 1000);
    });
  }, [socket]);

  return (
    <div className={styles.chat}>
      <Sidebar socket={socket} />
      <main className={styles.main}>
        <Body messages={messages} status={status} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  );
};
