import { Currency } from "../../shared/helper";
import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <Link to={`/stores/${product.store_id}/products/${product.id}`}>
      <div className="prd-cBox">
        <img src={product.image} alt={product.name} className="w-100" />
        <div className="ctn-p text-center">
          <h3>{product.name}</h3>
          <div className="innerctn ">
            <h4>
              <Currency />
              {product.sale_price ? product.sale_price : product.price}
            </h4>
            {product.sale_price && (
              <h5>
                <Currency />
                {product.price}
              </h5>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
