import { Body } from "./components/body/body"
import { MessageBlock } from "./components/message-block/message-block"
import { Sidebar } from "./components/sidebar/sidebar"
import styles from "./styles.module.css"

export const ChatPage = ({socket}) => {
  return (
    <div className={styles.chat}>
        <Sidebar />
        <main className={styles.main}>
            <Body />
            <MessageBlock />
        </main>
    </div>
  )
}
