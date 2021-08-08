import { useEffect, useState } from "react";
import {
  getAllAtlasProducts,
  getAllClientsForOneProduct,
} from "../../services/api/requests";
import {
  addProductFlag,
  filterSpecificProduct,
  getProductCustomers,
  getProductsIds,
} from "../../shared/utils";
import transformErrorsToReadableFormat from "../../shared/components/ErrorBoundry/utils";
import {
  BAMBOO_PRODUCT,
  CONFLUENCE_PRODUCT,
  FECRU_PRODUCT,
  JIRA_PRODUCT,
} from "../../services/api/constants";

const useAllAvailableProductsState = () => {
  const [allProductList, setAllProductList] = useState(null);
  useEffect(() => {
    getAllAtlasProducts().then(({ data }) => {
      setAllProductList(data || []);
    });
  }, []);
  return allProductList;
};

const useApiPollingInterval = () => {
  const [timeInterval, setTimeInterval] = useState(0);

  setTimeout(() => {
    setTimeInterval(timeInterval + 1);
  }, 30000);

  return timeInterval;
};

// todo move promises to separate file
const promiseOfAllConfluenceClients = (productsIds) => {
  const getAvailableConfluenceProduct = filterSpecificProduct(
    productsIds,
    CONFLUENCE_PRODUCT
  );
  return getAllClientsForOneProduct(
    `products/${getAvailableConfluenceProduct}`
  );
};

const promiseOfAllJiraClients = (productsIds) => {
  const getAvailableJiraProduct = filterSpecificProduct(
    productsIds,
    JIRA_PRODUCT
  );
  return getAllClientsForOneProduct(`products/${getAvailableJiraProduct}`);
};

const promiseOfAllBambooClients = (productsIds) => {
  const getAvailableBambooProduct = filterSpecificProduct(
    productsIds,
    BAMBOO_PRODUCT
  );
  return getAllClientsForOneProduct(`products/${getAvailableBambooProduct}`);
};

const promiseOfAllFecruClients = (productsIds) => {
  const getAvailableFecruProduct = filterSpecificProduct(
    productsIds,
    FECRU_PRODUCT
  );
  return getAllClientsForOneProduct(`products/${getAvailableFecruProduct}`);
};

const useAllAtlasProductsClientsState = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [allProductsClients, setAllProductsClients] = useState([]);

  const allProductList = useAllAvailableProductsState();
  const timeInterval = useApiPollingInterval();

  useEffect(() => {
    if (allProductList) {
      const productsIds = getProductsIds(allProductList);

      Promise.allSettled([
        promiseOfAllConfluenceClients(productsIds),
        promiseOfAllJiraClients(productsIds),
        promiseOfAllBambooClients(productsIds),
        promiseOfAllFecruClients(productsIds),
      ]).then((data) => {
        const confluenceCustomers = addProductFlag(
          getProductCustomers(data[0]?.value?.data),
          CONFLUENCE_PRODUCT
        );
        const jiraCustomers = addProductFlag(
          getProductCustomers(data[1]?.value?.data),
          JIRA_PRODUCT
        );
        const bambooCustomers = addProductFlag(
          getProductCustomers(data[2]?.value?.data),
          BAMBOO_PRODUCT
        );
        const fecruCustomers = addProductFlag(
          getProductCustomers(data[3]?.value?.data),
          FECRU_PRODUCT
        );

        setAllProductsClients([
          ...jiraCustomers,
          ...confluenceCustomers,
          ...bambooCustomers,
          ...fecruCustomers,
        ]);
        setErrorMessage(transformErrorsToReadableFormat(data));
      });
    }
  }, [allProductList, timeInterval]);
  return { allProductsClients, errorMessage };
};

export default useAllAtlasProductsClientsState;
