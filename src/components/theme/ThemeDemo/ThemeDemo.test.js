import React from "react";
import { render } from "@testing-library/react";
import ThemeDemo from "./ThemeDemo";

it("has a ThemeDemo component", () => {
  const { getByText } = render(<ThemeDemo />);
  expect(getByText("ThemeDemo")).toBeInTheDocument();
});
