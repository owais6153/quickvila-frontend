import HeaderCartItem from "./header-cart-item";
import { Currency } from "../../helper";
const HeaderCartDropdown = ({ cart }) => {
  return (
    <div className="header-cart">
      <div className="cart-products">
        {cart.products &&
          cart.products.map((product) => {
            return <HeaderCartItem key={product.id} product={product} />;
          })}
        {cart.products.length === 0 && <h3>No Products In Cart</h3>}
      </div>
      {cart.products.length > 0 && (
        <div className="header-cart-actions">
          <h5>Total: <Currency/>{cart.total}</h5>
          <button className="btn btn-primary">Cart</button>
          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
};
export default HeaderCartDropdown;
