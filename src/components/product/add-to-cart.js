import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../shared/hooks/cart-hook";
const AddToCartButton = (props) => {
  const { isLogin, toggleLoginModal, auth } = useContext(AppContext);
  const [cart, addToCart] = useCart();

  const onClickHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isLogin) {
      toggleLoginModal();
    } else {
      try {
        const res = await addToCart(props.product);
        if (res.status == 200) {
          toast.success(`${props.product.name} added to Cart!`);
        }
      } catch (err) {}
    }
  };
  return (
    <button className="btn btn-primary" onClick={onClickHandler}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
