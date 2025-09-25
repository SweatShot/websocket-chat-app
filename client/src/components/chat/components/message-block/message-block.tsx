import { useState, FormEvent } from "react";
import { Socket } from "socket.io-client";
import styles from "./styles.module.css";

interface MessageBlockProps {
  socket: Socket;
}

export const MessageBlock: React.FC<MessageBlockProps> = ({ socket }) => {
  const [message, setMessage] = useState<string>("");

  const isTyping = () => {
    socket.emit("typing", `${localStorage.getItem("user")} is typing`);
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (message.trim() && user) {
      socket.emit("message", {
        text: message,
        name: user,
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  return (
    <div className={styles.messageBlock}>
      <form className={styles.form} onSubmit={handleSend}>
        <input
          type="text"
          className={styles.userMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={isTyping}
        />
        <button className={styles.btn}>Сказать</button>
      </form>
    </div>
  );
};
