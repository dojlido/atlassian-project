import { render } from "@testing-library/react";
import ProductColumnCustomer from "./index";
import { allAtlasProductsClients } from "../../mocks/allAtlasProductsClients";

describe("ProductColumnCustomer", () => {
  const props = allAtlasProductsClients[0];

  test("Should render ProductColumnCustomer component correctly with none empty props", () => {
    const { getByText } = render(<ProductColumnCustomer {...props} />);

    expect(getByText("Customer company:")).toBeInTheDocument();
  });

  test("should not fail and return empty customer tile without props", () => {
    const { getByText } = render(<ProductColumnCustomer />);

    expect(getByText("Customer company:")).toBeInTheDocument();
  });
});
