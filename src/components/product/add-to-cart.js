import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import { toast } from 'react-toastify';

const AddToCartButton = (props) => {
    const {addToCart, isLogin, toggleLoginModal, auth} = useContext(AppContext);

    const onClickHandler = (e) => {
        e.stopPropagation();  
        e.preventDefault()
        if(!isLogin || !auth.verified){
            toggleLoginModal();
        }else{
            addToCart(props.product);
            toast.success(`${props.product.name} added to Cart!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
      }
    return (
        <button className="btn btn-primary" onClick={onClickHandler}>Add To Cart</button>
    );
}

export default AddToCartButton;