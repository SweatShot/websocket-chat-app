import { useEffect, useState } from "react";
import { Body } from "./components/body/body";
import { MessageBlock } from "./components/message-block/message-block";
import { Sidebar } from "./components/sidebar/sidebar";
import styles from "./styles.module.css";

export const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, []);

  return (
    <div className={styles.chat}>
      <Sidebar />
      <main className={styles.main}>
        <Body messages={messages} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  );
};
