import { Body } from "./components/body/body"
import { MessageBlock } from "./components/message-block/message-block"
import { Sidebar } from "./components/sidebar/sidebar"

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
