/**
 * From the HTML addon
 * @see https://github.com/whitespace-se/storybook-addon-html
 */
import { withHTML } from "@whitespace/storybook-addon-html/react";
export const decorators = [
  // ...
  withHTML,
];

/**
 * Original code starts here ...
 */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
