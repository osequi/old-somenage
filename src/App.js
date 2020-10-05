import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import Demo from "./App.demo";

const App = () => (
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>
);

export default App;
