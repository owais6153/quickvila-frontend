import { Currency } from "../../helper";
const HeaderCartItem = ({ item }) => {
  return (
    <div className="cart-product">
      <img src={item.product.image} alt={item.product.name} />
      <div>
        <h3>{item.product.name}</h3>
        <p>
          <span className="price mr-3">
            <Currency />
            {item.product.price}
          </span>
          Qty: {item.qty}
        </p>
      </div>
    </div>
  );
};
export default HeaderCartItem;
