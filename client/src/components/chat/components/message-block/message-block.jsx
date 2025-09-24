import styles from "./styles.module.css"

export const MessageBlock = () => {
  return (
    <div className="message-block">
      <form>
        <input type="text" className="user-message" />
        <button>Сказать</button>
      </form>
    </div>
  );
};
