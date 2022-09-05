import { useContext } from "react";
import { AppContext } from "../shared/context/app-context";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../shared/hooks/cart-hook";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import CartBox from "../components/cart/cart-box";

import { useLoading } from "../shared/hooks/loader-hook";
const Checkout = () => {
  const { isLogin } = useContext(AppContext);
  const { setIsLoading } = useLoading(true);
  const [cart] = useCart();
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="Checkout" />
          {!isLogin || !cart.count || cart.count < 1 ? (
            <h3>{!isLogin ? "Please Login First" : "No product in Cart"}</h3>
          ) : (
            <Row>
              <Col md={8}>
                <h3>Personal Info</h3>
              </Col>
              <Col md={4}>
                <h3>Products</h3>
                <CartBox cart={cart} login={isLogin} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default Checkout;
