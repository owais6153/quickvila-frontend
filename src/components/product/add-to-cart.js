import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";

const AddToCartButton = (props) => {
    const {addToCart} = useContext(AppContext);

    const onClickHandler = () => {
        addToCart(props.product);
    }
    return (
        <button className="btn btn-primary" onClick={onClickHandler}>Add To Cart</button>
    );
}

export default AddToCartButton;