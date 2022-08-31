import { Container, Row, Col } from "react-bootstrap";
import StoreItem from "../store/item";
import Icon from "../../shared/components/font-awesome-icon";
const StoreSlider = (props) => {
  return (
    <section className="home-sec-one">
      <Container>
        <Row className="RRone">
          <Col md={6}>
            <h3>All Stores</h3>
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
        <Row className="RRtwo">
          <Col md={4}>
            <StoreItem />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default StoreSlider;
