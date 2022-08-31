import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import { homeUrl } from "../../shared/helper";

const AddToWishlistButton = (props) => {
    const {isLogin, toggleLoginModal} = useContext(AppContext);
    const onWishListHandler = (e) => {
      e.stopPropagation();  
      e.preventDefault()
      if(!isLogin){
        toggleLoginModal();
      }
    }
    return (       
        <div className="wishlist-icon" onClick={onWishListHandler}>
          <img src={homeUrl("images/Vector.png")} alt="wishlist-icon"/>
        </div>
    );
}

export default AddToWishlistButton;