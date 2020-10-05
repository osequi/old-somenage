import React from "react";
import { render } from "@testing-library/react";
import Breakpoint from "./Breakpoint";

it("has a Breakpoint component", () => {
  const { getByText } = render(<Breakpoint />);
  expect(getByText("Breakpoint")).toBeInTheDocument();
});
