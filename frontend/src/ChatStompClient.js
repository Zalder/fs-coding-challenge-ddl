import { Client } from "@stomp/stompjs";
import { useChatStore } from "./store/ChatStore";

const wsEndpoint = "ws://localhost:8888/ws-chat";

export class ChatStompClient {
  constructor() {
    this.client = new Client({
      brokerURL: wsEndpoint,
      onConnect: () => this.onConnect(),
    });

    this.newMessageCallback = null;
  }

  onConnect() {
    this.client.subscribe("/topic/newMessage", (message) => {
      useChatStore.getState().addMessage(JSON.parse(message.body));
    });
  }

  connect() {
    this.client.activate();
  }

  disconnect() {
    this.client.deactivate();
  }

  sendMessage(username, message) {
    this.client.publish({
      destination: "/app/sendMessage",
      body: JSON.stringify({ body: message, senderUsername: username }),
    });
  }

  subscribeToNewMessages(callback) {
    this.newMessageCallback = callback;
  }
}
