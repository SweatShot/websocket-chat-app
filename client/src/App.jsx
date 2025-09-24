import { io } from "socket.io-client";
const socket = io("http://localhost:5001");

function App() {
  return (
    <div className="App">
      <h1>Websocket</h1>
    </div>
  );
}

export default App;
