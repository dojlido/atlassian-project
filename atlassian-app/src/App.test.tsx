import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render SearchBar component", () => {
  render(<App />);
  const searchBarPlaceholder = screen.getByPlaceholderText(
    "Start typing to search..."
  );
  expect(searchBarPlaceholder).toBeInTheDocument();
});
