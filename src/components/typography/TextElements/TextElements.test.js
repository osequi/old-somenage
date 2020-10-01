import React from "react";
import { render } from "@testing-library/react";
import TextElements from "./TextElements";

it("has a TextElements component", () => {
  const { getByText } = render(<TextElements />);
  expect(getByText("TextElements")).toBeInTheDocument();
});
