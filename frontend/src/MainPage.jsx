import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
  padding: 2.5rem 5rem;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const UsernameRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ChatSection = styled.div`
  flex-grow: 1;
  border: 1px solid #9396a9;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  background-color: white;
`;

const SendMessageRow = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
  width: 100%;
  background-color: #d5dade;
  padding: 1rem 1.5rem;
`;

const NewMessageInput = styled.input`
  flex-grow: 1;
  height: 3rem;
  border: none;
  border-radius: 3px;
`;

const MessagesSection = styled.div`
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

const SendMessageButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 1rem 1rem;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #bfc4c7;
  }
`;

const MessageTimestamp = Username;

export default function MainPage() {
  return (
    <MainSection>
      <p>Please select a username.</p>
      <UsernameRow>
        Username: <input type="text" placeholder="username"></input>
        <button>Submit</button>
      </UsernameRow>
      <ChatSection>
        <MessagesSection>
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
        </MessagesSection>
        <SendMessageRow>
          <NewMessageInput type="text" />
          <SendMessageButton>Send</SendMessageButton>
        </SendMessageRow>
      </ChatSection>
    </MainSection>
  );
}
