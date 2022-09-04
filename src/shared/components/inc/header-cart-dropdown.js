import HeaderCartItem from "./header-cart-item";
import { Currency } from "../../helper";
const HeaderCartDropdown = ({ cart }) => {
  return (
    <div className="header-cart">
      <div className="cart-products">
        {cart.items &&
          cart.items.map((item) => {
            return <HeaderCartItem key={item.id} item={item} />;
          })}
        {(cart.count && cart.count === 0) || !cart.count ? (
          <h3>No Products In Cart</h3>
        ) : undefined}
      </div>
      {cart.count && cart.count > 0 && (
        <div className="header-cart-actions">
          <h5>
            Total: <Currency />
            {cart.total}
          </h5>
          <button className="btn btn-primary" style={{ marginRight: "10px" }}>
            Cart
          </button>
          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
};
export default HeaderCartDropdown;
