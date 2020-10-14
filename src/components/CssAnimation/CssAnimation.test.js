import React from "react";
import { render } from "@testing-library/react";
import CssAnimation from "./CssAnimation";

it("has a CssAnimation component", () => {
  const { getByText } = render(<CssAnimation />);
  expect(getByText("CssAnimation")).toBeInTheDocument();
});
