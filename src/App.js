import React, { createContext } from "react";

import theme from "./theme";
import Demo from "./App.demo";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Demo />
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
