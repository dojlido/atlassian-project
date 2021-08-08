import { AllAtlasProductsClients } from "../../../interfaces/ProductColumnInterfaces";
import { ErrorObject } from "../../../interfaces/ErrorBoundryInterfaces";

import ProductColumnCustomer from "../ProductColumnCustomer";
import ErrorBoundary from "../ErrorBoundry";

interface ProductColumnProps {
  atlasProductName: string;
  allAtlasProductsClients: AllAtlasProductsClients[];
  errorMessage: ErrorObject[];
}

const ProductColumn = ({
  atlasProductName,
  allAtlasProductsClients,
  errorMessage,
}: ProductColumnProps) => {
  return (
    <article
      className="product"
      tabIndex={0}
      aria-label={`${atlasProductName} product column`}
    >
      <h2 className="product--name">{atlasProductName}</h2>
      <ul className="customers">
        {allAtlasProductsClients.map(
          (
            { id, avatar, name, job: { company, title }, quote, productName },
            index
          ) =>
            productName === atlasProductName ? (
              <ProductColumnCustomer
                id={id}
                avatar={avatar}
                name={name}
                company={company}
                title={title}
                quote={quote}
              />
            ) : (
              <>
                {index === 0 && (
                  <ErrorBoundary
                    errorMessage={errorMessage}
                    atlasProductName={atlasProductName}
                  />
                )}
              </>
            )
        )}
      </ul>
    </article>
  );
};

export default ProductColumn;
