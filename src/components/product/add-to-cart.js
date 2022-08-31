import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";

const AddToCartButton = (props) => {
    const {addToCart, isLogin, toggleLoginModal} = useContext(AppContext);

    const onClickHandler = (e) => {
        e.stopPropagation();  
        e.preventDefault()
        if(!isLogin){
            toggleLoginModal();
        }else{
            addToCart(props.product);
        }
      }
    return (
        <button className="btn btn-primary" onClick={onClickHandler}>Add To Cart</button>
    );
}

export default AddToCartButton;