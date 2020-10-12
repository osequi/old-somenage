import React from "react";
import { render } from "@testing-library/react";
import Cube from "./Cube";

it("has a Cube component", () => {
  const { getByText } = render(<Cube />);
  expect(getByText("Cube")).toBeInTheDocument();
});
