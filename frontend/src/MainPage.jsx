import React from "react";
import styled from "styled-components";
import Chat from "./components/Chat";
import UsernameSelection from "./components/UsernameSelection";

const MainSection = styled.div`
  padding: 2.5rem 5rem;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export default function MainPage() {
  return (
    <MainSection>
      <p>Please select a username.</p>
      <UsernameSelection />
      <Chat />
    </MainSection>
  );
}
