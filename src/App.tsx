import React from "react";
import "./App.css";
import Main from "./components/navigation/main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./material-ui/main-theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
