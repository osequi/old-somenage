import React from "react";
import { render } from "@testing-library/react";
import Face from "./Face";

it("has a Face component", () => {
  const { getByText } = render(<Face />);
  expect(getByText("Face")).toBeInTheDocument();
});
