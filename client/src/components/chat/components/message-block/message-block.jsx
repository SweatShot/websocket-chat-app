import styles from "./styles.module.css"

export const MessageBlock = () => {
  return (
    <div className={styles.messageBlock}>
      <form className={styles.form}>
        <input type="text" className={styles.userMessage} />
        <button className={styles.btn}>Сказать</button>
      </form>
    </div>
  );
};
