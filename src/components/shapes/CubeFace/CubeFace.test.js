import React from "react";
import { render } from "@testing-library/react";
import CubeFace from "./CubeFace";

it("has a CubeFace component", () => {
  const { getByText } = render(<CubeFace />);
  expect(getByText("CubeFace")).toBeInTheDocument();
});
