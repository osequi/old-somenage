import React from "react";
import { render } from "@testing-library/react";
import Scale from "./Scale";

it("has a Scale component", () => {
  const { getByText } = render(<Scale />);
  expect(getByText("Scale")).toBeInTheDocument();
});
