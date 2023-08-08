import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { CyclesContextsProvider } from "./contexts/CyclesContexts";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextsProvider>
          <Router />
        </CyclesContextsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
