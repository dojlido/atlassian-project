import { AllAtlasProductsClients } from "../../interfaces/ProductColumnInterfaces";
import { ErrorObject } from "../../interfaces/ErrorBoundryInterfaces";

import { ALL_ATLAS_PRODUCTS } from "../../services/api/constants";

import ProductColumn from "../../shared/components/ProductColumn";

interface AllProductsColumnsProps {
  allAtlasProductsClients: AllAtlasProductsClients[];
  errorMessage: ErrorObject[];
}

const AllProductsColumns = ({
  allAtlasProductsClients,
  errorMessage,
}: AllProductsColumnsProps) => {
  return (
    <section>
      {ALL_ATLAS_PRODUCTS.map((atlasProductName) => (
        <ProductColumn
          atlasProductName={atlasProductName}
          allAtlasProductsClients={allAtlasProductsClients}
          errorMessage={errorMessage}
          key={atlasProductName}
        />
      ))}
    </section>
  );
};

export default AllProductsColumns;
