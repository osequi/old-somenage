import React from "react";
import { render } from "@testing-library/react";
import Font from "./Font";

it("has a Font component", () => {
  const { getByText } = render(<Font />);
  expect(getByText("Font")).toBeInTheDocument();
});
