import { Currency } from "../../shared/helper";
import AddToCartButton from "./add-to-cart";
import { Link } from "react-router-dom";
import AddToWishlistButton from "./add-to-wishlist";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="prd-cBox">
        <AddToWishlistButton />
        <img src={`${product.image}`} alt={product.name} className="w-100" />
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
          <AddToCartButton product={product} />
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
