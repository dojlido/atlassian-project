import { render } from "@testing-library/react";
import ProductColumn from "./index";
import {
  CONFLUENCE_PRODUCT,
  JIRA_PRODUCT,
} from "../../../services/api/constants";
import { allAtlasProductsClients } from "../../mocks/allAtlasProductsClients";

describe("ProductColumn", () => {
  const mockedErrorMessage = [
    {
      statusText: "Request failed with status code 404",
      method: "get",
      url: "produrcts/bamboo",
      productName: "bamboo",
    },
    {
      statusText: "Request failed with status code 404",
      method: "get",
      url: "produwcts/fecru",
      productName: "fecru",
    },
  ];

  test("Should render ProductColumn component correctly", () => {
    const { getAllByText } = render(
      <ProductColumn
        errorMessage={mockedErrorMessage}
        atlasProductName={JIRA_PRODUCT}
        allAtlasProductsClients={allAtlasProductsClients}
      />
    );

    expect(getAllByText("Customer company:")[0]).toBeInTheDocument();
    expect(getAllByText("Customer company:")[0]).toBeInTheDocument();
  });

  test("should not fail and return empty product column if there allAtlasProductsClients array will be empty", () => {
    const { getByText } = render(
      <ProductColumn
        errorMessage={null}
        atlasProductName={CONFLUENCE_PRODUCT}
        allAtlasProductsClients={[]}
      />
    );

    expect(getByText(CONFLUENCE_PRODUCT)).toBeInTheDocument();
  });
});
