import React from "react";
import styled from "styled-components";

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default function UsernameSelection() {
  return (
    <UsernameContainer>
      Username: <input type="text" placeholder="username"></input>
      <button>Submit</button>
    </UsernameContainer>
  );
}
