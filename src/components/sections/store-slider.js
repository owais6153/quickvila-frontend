import { Container, Row, Col } from "react-bootstrap";
import StoreItem from "../store/item";
import Icon from "../../shared/components/font-awesome-icon";
import Carousel from "react-multi-carousel";
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
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={0}
  swipeable
  itemAriaLabel="Store Slider"
  ariaLabel="Store Slider"
>            <StoreItem ariaLabel="product-slieder"/><StoreItem ariaLabel="product-slieder"/><StoreItem ariaLabel="product-slieder"/></Carousel>

      </Container>
    </section>
  );
};
export default StoreSlider;
