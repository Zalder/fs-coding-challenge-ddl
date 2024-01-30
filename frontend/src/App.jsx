import styled from "styled-components";
import "./App.css";
import { ChatStompClient } from "./ChatStompClient.js";
import MainPage from "./MainPage";
import { StompClientContext } from "./context/StompClientContext.jsx";
import GlobalStyles from "./globalStyles.css.js";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StompClient = new ChatStompClient();

function App() {
  return (
    <>
      <StompClientContext.Provider value={{ client: StompClient }}>
        <GlobalStyles />
        <PageContainer>
          <MainPage />
        </PageContainer>
      </StompClientContext.Provider>
    </>
  );
}

export default App;
