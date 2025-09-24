import { Route } from "react-router-dom";
import { io } from "socket.io-client";
import { Home } from "./components/home/home";
import { ChatPage } from "./components/chat/chat";
const socket = io("http://localhost:5001");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
