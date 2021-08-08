import React, { useEffect, useState, Suspense } from "react";
import useAllAtlasProductsClientsState from "./hooks";
import SearchBar from "../../shared/components/SearchBar";

const AllProductsColumns = React.lazy(() => {
  return new Promise((resolve) => {
    // todo before production relase remove setTimeout
    // fake timer only for functionality testing purpose (app is to fast to see Loader ;) )
    setTimeout(() => resolve(import("../AllProductsColumns")), 3000);
  });
});

const RootComponent = () => {
  const { allProductsClients, errorMessage } =
    useAllAtlasProductsClientsState();
  const [allAtlasProductsClients, setAllAtlasProductsClients] = useState([]);

  useEffect(() => {
    setAllAtlasProductsClients(allProductsClients);
  }, [allProductsClients]);

  return (
    <>
      <SearchBar
        atlasProductsClients={allProductsClients}
        setAllAtlasProductsClients={setAllAtlasProductsClients}
      />
      <Suspense fallback={<div>Wczytywanie...</div>}>
        <AllProductsColumns
          allAtlasProductsClients={allAtlasProductsClients}
          errorMessage={errorMessage}
        />
      </Suspense>
    </>
  );
};

export default RootComponent;
