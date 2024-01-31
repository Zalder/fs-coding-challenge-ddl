import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { StompClientContext } from "../context/StompClientContext";
import { useChatStore } from "../store/ChatStore";
import ChatMessagesList from "./ChatMessagesList";
import NewMessageForm from "./NewMessageForm";

const ChatContainer = styled.div`
  flex-grow: 1;
  border: 1px solid #9396a9;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  background-color: white;
`;

export default function Chat() {
  const setMessages = useChatStore((state) => state.setMessages);

  const chatClient = useContext(StompClientContext).client;

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8888/api/chat/messages");
      const data = await res.json();

      setMessages(data);
      chatClient.connect();
      chatClient.subscribeToNewMessages();
    })();
  }, [setMessages, chatClient]);
  return (
    <ChatContainer>
      <ChatMessagesList />
      <NewMessageForm />
    </ChatContainer>
  );
}
