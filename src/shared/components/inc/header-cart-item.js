import { Currency } from "../../helper";
import { Link } from "react-router-dom";
const HeaderCartItem = ({ item }) => {
  return (
    <Link to={`/products/${item.product.id}`}>
      <div className="cart-product">
        <img src={item.product.image} alt={item.product.name} />
        <div>
          <h3>{item.product.name}</h3>
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
export default HeaderCartItem;
