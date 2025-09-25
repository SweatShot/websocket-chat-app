export interface Message {
  text: string;
  name: string;
  id: string;
  socketID: string;
}

export interface User {
  user: string;
  socketID: string;
}
