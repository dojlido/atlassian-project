import { useMemo } from "react";
import { ProductColumnCustomer as ProductColumnCustomerInterface } from "../../../interfaces/ProductColumnCustomerInterfaces";

const ProductColumnCustomer = ({
  id,
  name,
  avatar,
  title,
  company,
  quote,
}: ProductColumnCustomerInterface) =>
  useMemo(() => {
    return (
      <li key={id} className="customer">
        <div className="customer--info">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            aria-label={`Profile image of ${name}`}
            className="customer--avatar"
            src={avatar}
            alt={`Profile image of ${name}`}
          />
          <h3 className="customer--name" tabIndex={0}>
            {name}
          </h3>
          <small className="customer--position">{title}</small>
          <h4>Customer company:</h4>
          <small className="customer--company">&quot;{company}&quot;</small>
        </div>
        <blockquote className="customer--quote" tabIndex={0}>
          {quote}
        </blockquote>
      </li>
    );
  }, [avatar, company, id, name, quote, title]);

export default ProductColumnCustomer;
