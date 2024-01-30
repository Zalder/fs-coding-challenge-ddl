import { Client } from "@stomp/stompjs";

const wsEndpoint = "ws://localhost:8888/ws-chat";

export class ChatStompClient {
  constructor() {
    this.client = new Client({
      brokerURL: wsEndpoint,
      onConnect: () => {
        console.log("IT WORKS FUCK YES");
      },
    });

    this.client.activate();
  }
}
