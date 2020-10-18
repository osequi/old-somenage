import React from "react";
import { render } from "@testing-library/react";
import Hide from "./Hide";

it("has a Hide component", () => {
  const { getByText } = render(<Hide />);
  expect(getByText("Hide")).toBeInTheDocument();
});
