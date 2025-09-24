import { Body } from "./components/body"
import { MessageBlock } from "./components/message-block"
import { Sidebar } from "./components/sidebar"

export const ChatPage = ({socket}) => {
  return (
    <div className="chat">
        <Sidebar />
        <main className="main">
            <Body />
            <MessageBlock />
        </main>
    </div>
  )
}
