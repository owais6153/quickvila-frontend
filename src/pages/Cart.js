import { useContext } from "react";
import { AppContext } from "../shared/context/app-context";
import { Container, Table } from "react-bootstrap";
import { useCart } from "../shared/hooks/cart-hook";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import CartItem from "../components/cart/cart-item";
import { toast } from "react-toastify";

const Cart = () => {
  const { isLogin } = useContext(AppContext);
  const [cart, addToCart, emptyCart] = useCart();
  const emptyHandler = async () => {
    const responseData = await emptyCart();
    if (responseData.status == 200) {
      toast.success(`Cart is Empty`, {
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
    <StaticPage>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="Cart" />
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub-Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!isLogin || !cart.count || cart.count < 1 ? (
                <tr>
                  <td colSpan={5}>
                    <div>
                      <h3>No Product in Cart</h3>
                    </div>
                  </td>
                </tr>
              ) : (
                cart.items.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })
              )}
            </tbody>
          </Table>
          <div className="text-right">
            <button className="btn btn-primary" onClick={emptyHandler}>
              Empty Cart
            </button>
          </div>
        </Container>
      </section>
    </StaticPage>
  );
};

export default Cart;
