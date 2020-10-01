import React from "react";
import { render } from "@testing-library/react";
import Fonts from "./Fonts";

it("has a Fonts component", () => {
  const { getByText } = render(<Fonts />);
  expect(getByText("Fonts")).toBeInTheDocument();
});
