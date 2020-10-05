import React from "react";
import { render } from "@testing-library/react";
import MediaQueries from "./MediaQueries";

it("has a MediaQueries component", () => {
  const { getByText } = render(<MediaQueries />);
  expect(getByText("MediaQueries")).toBeInTheDocument();
});
