import React from "react";
import styled from "styled-components";
import { useChatStore } from "../store/ChatStore";

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 1rem 1rem;
  gap: 1rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-right: 2rem;
`;

const Username = styled.div`
  color: #b7bfc5;
  font-size: 12px;
`;

const MessageContent = styled.div`
  color: #454c55;
  font-size: 13px;
`;

const OwnMessage = styled(Message)`
  border: 1px solid #d5dbdf;
  border-radius: 3px;
  padding: 0.5rem;
`;

const MessageTimestamp = Username;

export default function ChatMessagesList() {
  const { messages, username } = useChatStore();

  const messagesList = messages.map((m) => {
    const MessageType = username === m.senderUsername ? OwnMessage : Message;
    return (
      <MessageType key={m.id}>
        <Username>{m.senderUsername}</Username>
        <MessageContent>{m.body}</MessageContent>
        <MessageTimestamp>{m.sentAt}</MessageTimestamp>
      </MessageType>
    );
  });
  return <MessagesContainer>{messagesList}</MessagesContainer>;
}
