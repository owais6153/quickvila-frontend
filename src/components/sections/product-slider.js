import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../product/item";
import Icon from "../../shared/components/font-awesome-icon";

const ProductSlider = (props) => {
  return (
    <section className="home-sec-two">
      <Container>
        <Row className="RRone">
          <Col md={6}>
            <h3>{props.title ? props.title : "All Products"}</h3>
          </Col>
          <Col md={6}>
            <a href="#">See All</a>
            <a href="#">
              <Icon icon="fa fa-chevron-left" />
            </a>
            <a href="#">
              <Icon icon="fa fa-chevron-right" />
            </a>
          </Col>
        </Row>
        <Row className="twoS-two">
          {props.products &&
            props.products.map((product) => {
              return (
                <Col key={product.id} md={3}>
                  <ProductItem key={product.id} product={product} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};
export default ProductSlider;
