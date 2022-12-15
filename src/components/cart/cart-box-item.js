import { Currency } from "../../shared/helper";
import { Link } from "react-router-dom";
const CartBoxItem = ({ item }) => {
  return (
    <Link to={`/stores/${item.product.store_id}/products/${item.product.id}`}>
      <div className="cart-product">
        <img src={item.product.image} alt={item.product.name} />
        <div>
          <h3>
            {item.product.product_type === "variation" && item.variation
              ? item.variation.name
              : item.product.name}
          </h3>
          <p>
            <span className="price mr-3">
              <Currency />
              {item.line_total}
            </span>
            Qty: {item.qty}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default CartBoxItem;
