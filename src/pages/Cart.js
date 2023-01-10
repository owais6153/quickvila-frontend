import { useContext } from "react";
import { AppContext } from "../shared/context/app-context";
import { Col, Container, Row, Table } from "react-bootstrap";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import CartItem from "../components/cart/cart-item";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import CartTotalTable from "../components/cart/cart-total-table";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, emptyCart } = useContext(AppContext);
  const emptyHandler = async () => {
    const responseData = await emptyCart();
    if (responseData.status == 200) {
      toast.success(`Cart is Empty`);
    }
  };

  const style = {
    background: "#fff",
    border: "1px solid whitesmoke",
    boxShadow: "0 0.2rem 1rem rgb(0 0 0 / 12%)",
    padding: "20px",
  };

  return (
    <StaticPage>
      <Helmet>
        <title>Cart | {process.env.REACT_APP_MY_APP}</title>
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
            <h3>
              No product in Cart <Link to="/shop">Continue Shopping</Link>
            </h3>
          ) : (
            <>
              <div className="cart-table" style={style}>
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
              <Col
                lg="4"
                md={6}
                className="offset-lg-8 offset-md-6 cart-box main-cart">
                <Row>
                  <Col sm={12}>
                    <h3>Cart</h3>
                  </Col>
                  <CartTotalTable displayAll={true} cart={cart} />
                  <Col sm={12}>
                    <Link to="/checkout" className="btn w-100 mt-4 btn-primary">
                      Proceed to Checkout
                    </Link>
                  </Col>
                </Row>
              </Col>
            </>
          )}
        </Container>
      </section>
    </StaticPage>
  );
};

export default Cart;
