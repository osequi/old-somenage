/**
 * Imports other components and hooks
 */
import { typography, font, maxWidth } from "./typography";
import { breakpoints, breakpoint } from "./responsiveness";

/**
 * Defines the theme.
 */
const theme = {
  typography: {
    ...typography,
    font: (name) => font(name),
    maxWidth: (name) => maxWidth(name),
  },
  breakpoints: breakpoints,
  breakpointQuery: (name) => breakpoint(name),
  breakpoint: (name) => {
    const query = breakpoint(name);
    return query ? `@media screen and ${query})` : null;
  },
};

export default theme;
