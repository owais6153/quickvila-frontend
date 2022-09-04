import { Currency } from "../../shared/helper";
import Icon from "../../shared/components/font-awesome-icon";
import { useCart } from "../../shared/hooks/cart-hook";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  const [cart, addToCart, emptyCart, updateItem, removeItem] = useCart();
  const removeItemHandler = async () => {
    const responseData = await removeItem(item);
    if (responseData.status == 200) {
      toast.success(`Item Removed`, {
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
  const increment = async () => {
    const responseData = await updateItem(item, "increment");
    if (responseData.status == 200) {
      toast.success(`Item quantity updated`, {
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
  const decrement = async () => {
    if (item.qty != 1) {
      const responseData = await updateItem(item, "decrement");
      if (responseData.status == 200) {
        toast.success(`Item quantity updated`, {
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
  };
  return (
    <tr>
      <td>
        <Link to={`/products/${item.product.id}`}>
          <div className="cart-table-product">
            <img src={item.product.image} alt={item.product.name} />
            <h4>{item.product.name}</h4>
          </div>
        </Link>
      </td>
      <td>
        <Currency />
        {item.product.sale_price || item.product.price}
      </td>
      <td>
        <div className="quqntity">
          <input readOnly disabled className="form-control" value={item.qty} />
          <button className="btn" onClick={increment}>
            +
          </button>
          <button className="btn" onClick={decrement}>
            -
          </button>
        </div>
      </td>
      <td>
        <Currency />
        {item.line_total}
      </td>
      <td>
        <div onClick={removeItemHandler}>
          <Icon icon="fa fa-times-circle pointer" />
        </div>
      </td>
    </tr>
  );
};
export default CartItem;
