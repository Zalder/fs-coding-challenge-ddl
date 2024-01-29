import styled from "styled-components";
import "./App.css";
import MainPage from "./MainPage";
import GlobalStyles from "./globalStyles.css.js";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <MainPage />
      </PageContainer>
    </>
  );
}

export default App;
