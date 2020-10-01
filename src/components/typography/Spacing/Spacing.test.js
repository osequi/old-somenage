import React from "react";
import { render } from "@testing-library/react";
import Spacing from "./Spacing";

it("has a Spacing component", () => {
  const { getByText } = render(<Spacing />);
  expect(getByText("Spacing")).toBeInTheDocument();
});
