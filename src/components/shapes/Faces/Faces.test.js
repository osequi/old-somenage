import React from "react";
import { render } from "@testing-library/react";
import Faces from "./Faces";

it("has a Faces component", () => {
  const { getByText } = render(<Faces />);
  expect(getByText("Faces")).toBeInTheDocument();
});
