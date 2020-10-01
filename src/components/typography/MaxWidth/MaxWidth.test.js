import React from "react";
import { render } from "@testing-library/react";
import MaxWidth from "./MaxWidth";

it("has a MaxWidth component", () => {
  const { getByText } = render(<MaxWidth />);
  expect(getByText("MaxWidth")).toBeInTheDocument();
});
