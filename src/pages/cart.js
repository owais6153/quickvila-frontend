import { useContext } from "react";
import { AppContext } from "../shared/context/app-context";
const Cart = () => {
  const { cart, addToCart } = useContext(AppContext);
  return (
    <div>
      <button onClick={addToCart}>Click</button>
      <h1>Total: {cart.total}</h1>
      <h1>count: {cart.count}</h1>

      <ul>
        {cart.products &&
          cart.products.map((product) => {
            return (
              <li key={product.id}>
                {" "}
                {product.name}
                <br />
                Qty: {product.qty}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cart;
