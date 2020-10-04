import React from "react";
import { render } from "@testing-library/react";
import Breakpoints from "./Breakpoints";

it("has a Breakpoints component", () => {
  const { getByText } = render(<Breakpoints />);
  expect(getByText("Breakpoints")).toBeInTheDocument();
});
