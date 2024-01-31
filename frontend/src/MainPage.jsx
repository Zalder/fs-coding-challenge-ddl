import React, { useEffect } from "react";
import styled from "styled-components";
import Chat from "./components/Chat";
import UsernameSelection from "./components/UsernameSelection";
import { useChatStore } from "./store/ChatStore";

const MainSection = styled.div`
  padding: 2.5rem 5rem;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;

export default function MainPage() {
  const selectedUsername = useChatStore((state) => state.username);
  const setUsername = useChatStore((state) => state.setUsername);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [setUsername]);

  return (
    <MainSection>
      <UsernameSelection />
      {selectedUsername !== "" && <Chat />}
    </MainSection>
  );
}
