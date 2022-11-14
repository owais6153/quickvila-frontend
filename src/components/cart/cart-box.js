import CartBoxItem from "./cart-box-item";
import { Currency } from "../../shared/helper";
import { Link } from "react-router-dom";
import "./cart-box.css";
const CartBox = ({ cart, actions }) => {
  return (
    <div className="cart-box">
      {cart.items && cart.count > 0 && (
        <div className="cart-products">
          {cart.items.map((item) => {
            return <CartBoxItem key={item.id} item={item} />;
          })}
        </div>
      )}
      {(cart.count && cart.count === 0) || !cart.count ? (
        <h3>No Products In Cart</h3>
      ) : undefined}
      <div className="header-cart-actions">
        {cart.items && cart.count > 0 && actions && (
          <div>
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
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartBox;
