import React, { useState } from "react";
import styled from "styled-components";
import { useChatStore } from "../store/ChatStore";

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export default function UsernameSelection() {
  const [curUsername, setCurUsername] = useState("");
  const setUsername = useChatStore((state) => state.setUsername);
  const selectedUsername = useChatStore((state) => state.username);

  const onSubmitUsername = () => {
    setUsername(curUsername);
    localStorage.setItem("username", curUsername);
  };

  const onChangeUsername = () => {
    setUsername("");
    localStorage.setItem("username", "");
  };
  return selectedUsername === "" ? (
    <>
      <p>Please select a username.</p>
      <UsernameContainer>
        Username:{" "}
        <input
          type="text"
          placeholder="username"
          value={curUsername}
          onChange={(e) => setCurUsername(e.target.value)}
        ></input>
        <button onClick={onSubmitUsername}>Submit</button>
      </UsernameContainer>
    </>
  ) : (
    <UsernameContainer>
      <div>Your username: {selectedUsername}</div>
      <button onClick={onChangeUsername}>Change username</button>
    </UsernameContainer>
  );
}
