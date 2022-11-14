import React from "react";
import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import { toast } from "react-toastify";
const AddToCartButton = (props) => {
  const { isLogin, cart } = useContext(AppContext);

  const onClickHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await cart.addToCart(props.product);
      if (res.status == 200) {
        toast.success(`${props.product.name} added to Cart!`);
      }
    } catch (err) {}
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
