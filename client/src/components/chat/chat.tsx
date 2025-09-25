import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Body } from "./components/body/body";
import { MessageBlock } from "./components/message-block/message-block";
import { Sidebar } from "./components/sidebar/sidebar";
import styles from "./styles.module.css";
import { Message } from "@/types/types";


interface ChatPageProps {
  socket: Socket;
}

export const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    socket.on("response", (data: Message) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("response");
    };
  }, [socket]);

  useEffect(() => {
    socket.on("responseTyping", (data: string) => {
      setStatus(data);
      setTimeout(() => setStatus(""), 1000);
    });

    return () => {
      socket.off("responseTyping");
    };
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
