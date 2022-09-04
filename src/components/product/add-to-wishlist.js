import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import { homeUrl } from "../../shared/helper";
import { toast } from "react-toastify";

const AddToWishlistButton = (props) => {
  const { isLogin, toggleLoginModal, auth } = useContext(AppContext);
  const onWishListHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isLogin || !auth.verified) {
      toggleLoginModal();
    } else {
      toast.success(`Product added to Wishlist!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="wishlist-icon" onClick={onWishListHandler}>
      <img src={homeUrl("images/Vector.png")} alt="wishlist-icon" />
    </div>
  );
};

export default AddToWishlistButton;
