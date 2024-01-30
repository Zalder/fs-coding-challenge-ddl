import React from "react";
import styled from "styled-components";
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
  return (
    <ChatContainer>
      <ChatMessagesList />
      <NewMessageForm />
    </ChatContainer>
  );
}
