import React from "react";
import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../shared/hooks/cart-hook";
const AddToCartButton = (props) => {
  const { isLogin } = useContext(AppContext);
  const [cart, addToCart, emptyCart] = useCart();

  const onClickHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isLogin) {
      try {
        const res = await addToCart(props.product);
        if (res.status == 200) {
          toast.success(`${props.product.name} added to Cart!`);
        }
      } catch (err) {}
    }
  };
  return (
    <React.Fragment>
      {isLogin && (
        <button
          key={props.product.id}
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          Add To Cart
        </button>
      )}
    </React.Fragment>
  );
};

export default AddToCartButton;
