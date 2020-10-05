import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

it("has a Display component", () => {
  const { getByText } = render(<Display />);
  expect(getByText("Display")).toBeInTheDocument();
});
