interface User {
  name: string;
  uid: string;
}

interface MessageObject{
  user: User;
  message: string;
  time: Date.toLocaleString;
  // time: string; // of type Date().toLocaleString() i.e 'dd/mm/yyyy, H:MM:SS am'
}

interface Conversation {
  convoId: string;
  recipients: User[];
  messages: MessageObject[];
}
