// @ts-ignore
// eslint-disable-next-line
import get from "lodash/get";

const getProductsIds = (products: any[]): string[] | null[] =>
  products.map(({ id = null }) => id);

const filterSpecificProduct = (
  products: string[],
  desiredProduct: string
): string | null =>
  products.filter((productName) => productName === desiredProduct)[0] || null;

const getProductCustomers = (product: Array<[{}]>): Array<[{}]> | [] =>
  get(product, "customers", []);

const addProductFlag = (
  customers: Array<[{}]>,
  productName: string
): { productName: string }[] =>
  customers.map((customer) => ({ ...customer, productName }));

export {
  getProductsIds,
  filterSpecificProduct,
  getProductCustomers,
  addProductFlag,
};
