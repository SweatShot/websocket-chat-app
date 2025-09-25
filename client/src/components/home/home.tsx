import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import styles from "./styles.module.css";

interface HomeProps {
  socket: Socket;
}

export const Home: React.FC<HomeProps> = ({ socket }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    socket.emit("newUser", { user, socketID: socket.id });
    navigate("/chat");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2>Входит в чат</h2>
      <label htmlFor="user"></label>
      <input
        type="text"
        id="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className={styles.userInput}
      />
      <button type="submit" className={styles.homeBtn}>
        Войти
      </button>
    </form>
  );
};
