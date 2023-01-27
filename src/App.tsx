import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import { AppRoutes } from "./routes/AppRoutes";
import { PageWrapper } from "./components/PageWrapper";
import { GlobalStyle } from "./components/GlobalStyle";

const history = createBrowserHistory();

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />

      <Container>
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </Container>
    </Router>
  );
}

export default App;
