import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./index";
import { allAtlasProductsClients } from "../../mocks/allAtlasProductsClients";

describe("SearchBar", () => {
  const setAllAtlasProductsClients = jest.fn();

  test("should render correctly when atlasProductsClients is empty array", () => {
    const { container } = render(
      <SearchBar
        atlasProductsClients={[]}
        setAllAtlasProductsClients={setAllAtlasProductsClients}
      />
    );
    const input = container.querySelector('[aria-label="Searchbar"]');

    expect(input).toBeInTheDocument();
  });

  test("should call setAllAtlasProductsClients setter", () => {
    const { container } = render(
      <SearchBar
        atlasProductsClients={allAtlasProductsClients}
        setAllAtlasProductsClients={setAllAtlasProductsClients}
      />
    );
    const input = container.querySelector('[aria-label="Searchbar"]');

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: "Doloremque ex veniam." } });

    expect(setAllAtlasProductsClients).toHaveBeenCalledTimes(1);
  });
});
