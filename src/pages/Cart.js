import { useContext } from "react";
import { AppContext } from "../shared/context/app-context";
import { Container, Table } from "react-bootstrap";
import { useCart } from "../shared/hooks/cart-hook";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import CartItem from "../components/cart/cart-item";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import { useLoading } from "../shared/hooks/loader-hook";
const Cart = () => {
  const { cart, isLogin } = useContext(AppContext);
  const { emptyCart } = useCart();
  const emptyHandler = async () => {
    const responseData = await emptyCart();
    if (responseData.status == 200) {
      toast.success(`Cart is Empty`);
    }
  };
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <Helmet>
        <title>Cart | QuiclVila</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="Cart" />
          {!cart.count || cart.count < 1 ? (
            <h3>No product in Cart</h3>
          ) : (
            <div className="cart-table">
              <div className="table-responsive">
                <Table className="table">
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
                    {cart.items.map((item) => {
                      return <CartItem key={item.id} item={item} />;
                    })}
                  </tbody>
                </Table>
              </div>

              <div className="text-right">
                <button className="btn btn-primary" onClick={emptyHandler}>
                  Empty Cart
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </StaticPage>
  );
};

export default Cart;
