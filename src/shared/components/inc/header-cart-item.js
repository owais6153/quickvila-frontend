import { Currency } from "../../helper";
const HeaderCartItem = ({ product }) => {
  return (
    <div className="cart-product">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>
          <span className="price mr-3">
            <Currency />
            {product.price}
          </span>
          Qty: {product.qty}
        </p>
      </div>
    </div>
  );
};
export default HeaderCartItem;
