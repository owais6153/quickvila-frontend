import { Currency } from "../../shared/helper";
import Icon from "../../shared/components/font-awesome-icon";
import { AppContext } from "../../shared/context/app-context";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useContext } from "react";
const CartItem = ({ item }) => {
  const { updateItem, removeItem } = useContext(AppContext);
  const removeItemHandler = async () => {
    const responseData = await removeItem(item);
    if (responseData.status == 200) {
      toast.success(`Item Removed`);
    }
  };
  const increment = async () => {
    const responseData = await updateItem(item, "increment");
    if (responseData.status == 200) {
      toast.success(`Item quantity updated`);
    }
  };
  const decrement = async () => {
    if (item.qty != 1) {
      const responseData = await updateItem(item, "decrement");
      if (responseData.status == 200) {
        toast.success(`Item quantity updated`);
      }
    }
  };
  return (
    <tr>
      <td>
        <Link
          to={`/stores/${item.product.store_id}/products/${item.product.id}`}
        >
          <div className="cart-table-product">
            <img src={item.product.image} alt={item.product.name} />
            <h4>
              {item.product.product_type === "variation" && item.variation
                ? item.variation.name
                : item.product.name}
            </h4>
          </div>
        </Link>
      </td>
      <td>
        <Currency />

        {item.product.product_type === "variation" && item.variation
          ? item.variation.sale_price || item.variation.price
          : item.product.sale_price || item.product.price}
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
