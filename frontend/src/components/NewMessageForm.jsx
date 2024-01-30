import React from "react";
import styled from "styled-components";

const NewMessageContainer = styled.div`
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

export default function NewMessageForm() {
  return (
    <NewMessageContainer>
      <NewMessageInput type="text" />
      <SendMessageButton>Send</SendMessageButton>
    </NewMessageContainer>
  );
}
