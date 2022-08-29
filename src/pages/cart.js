import { useCart } from "../shared/hooks/cart-hook";

const Cart = () => {
  const [cart, addToCart] = useCart();
  return (
    <div>
      <button onClick={addToCart}>Click</button>
      <ul>
        {cart &&
          cart.map((product) => {
            return <li key={product.name}> {product.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Cart;
