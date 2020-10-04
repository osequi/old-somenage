import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { ThemeDefaultProps } from "./components/theme/Theme";

import Demo from "./components/Demo";

const App = () => (
  <ThemeProvider theme={ThemeDefaultProps}>
    <Demo />
  </ThemeProvider>
);

export default App;
