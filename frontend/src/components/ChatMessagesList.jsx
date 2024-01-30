import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
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
  return (
    <MessagesContainer>
      <OwnMessage>
        <Username>You</Username>
        <MessageContent>
          I am doing great, thank you for asking! What about you?
        </MessageContent>
        <MessageTimestamp>12 Mar 2018 13:43</MessageTimestamp>
      </OwnMessage>
      <Message>
        <Username>Maria</Username>
        <MessageContent>Hello Bob, how are you doing?</MessageContent>
        <MessageTimestamp>12 Mar 2018 13:25</MessageTimestamp>
      </Message>
    </MessagesContainer>
  );
}
