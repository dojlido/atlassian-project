import { render } from "@testing-library/react";
import React from "react";
import ErrorBoundary from "./index";
import { JIRA_PRODUCT } from "../../../services/api/constants";

describe("ErrorBoundry", () => {
  test("should not render component when errorMessage is empty", () => {
    const { container } = render(
      <ErrorBoundary errorMessage={null} atlasProductName={JIRA_PRODUCT} />
    );

    expect(container).toBeEmptyDOMElement();
  });
});
