import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"

export const Body = () => {
  const navigate = useNavigate()

  const handleLeave = () => {
    localStorage.removeItem('user')
    navigate('/');
  }
  return (
    <>
      <header className={styles.header}>
        <button className={styles.btn} onClick={handleLeave}>Покинуть чат</button>
      </header>

      <div className={styles.container}>
        <div className={styles.chats}>
          <p className={styles.senderName}>Вы</p>
          <div className={styles.messageSender}>
            <p>Hello</p>
          </div>
        </div>
        
        <div className={styles.chats}>
          <p>Вы</p>
          <div className={styles.messageRecipient}>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </>
  );
};