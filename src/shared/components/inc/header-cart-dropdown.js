import HeaderCartItem from "./header-cart-item";
import { Currency } from "../../helper";
import { Link } from "react-router-dom";
const HeaderCartDropdown = ({ cart, login }) => {
  return (
    <div className="header-cart">
      {cart.items && login && cart.count > 0 && (
        <div className="cart-products">
          {cart.items.map((item) => {
            return <HeaderCartItem key={item.id} item={item} />;
          })}
        </div>
      )}
      {(cart.count && cart.count === 0) || !cart.count || !login ? (
        <h3>No Products In Cart</h3>
      ) : undefined}
      {cart.items && cart.count > 0 && login && (
        <div className="header-cart-actions">
          <h5>
            Total: <Currency />
            {cart.total}
          </h5>
          <Link
            to="/cart"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            Cart
          </Link>

          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
};
export default HeaderCartDropdown;
