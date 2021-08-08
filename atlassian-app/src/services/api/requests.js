import fetchData from "./utils";

const fetchFactory = async (url, method) => fetchData(url, method);

export const getAllAtlasProducts = () => fetchFactory(`products`, "GET");

export const getAllClientsForOneProduct = (productNameParam) =>
  fetchFactory(productNameParam, "GET");
