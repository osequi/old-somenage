import React from "react";
import { render } from "@testing-library/react";
import Theme from "./Theme";

it("has a Theme component", () => {
  const { getByText } = render(<Theme />);
  expect(getByText("Theme")).toBeInTheDocument();
});
