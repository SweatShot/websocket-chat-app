import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import styles from "./styles.module.css";
import { User } from "@/types/types";

interface SidebarProps {
  socket: Socket;
}

export const Sidebar: React.FC<SidebarProps> = ({ socket }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.on("responseNewUser", (data: User[]) => setUsers(data));
    return () => {
      socket.off("responseNewUser");
    };
  }, [socket]);

  const filteredList = users.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.user === value.user && t.socketID === value.socketID
      )
  );

  return (
    <div className={styles.sidebar}>
      <h4 className={styles.header}>online users</h4>
      <ul className={styles.users}>
        {filteredList.map((element) => (
          <li key={element.socketID}>{element.user}</li>
        ))}
      </ul>
    </div>
  );
};
