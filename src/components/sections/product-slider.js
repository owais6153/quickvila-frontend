import ProductItem from "../product/item";
import CarouselButtonGroup from "../../shared/components/carousel-button-group";
import HeadingRow from "../../shared/components/heading-row";
import Carousel from "react-multi-carousel";

const ProductSlider = (props) => {
  return (
    <section className="home-sec-two container slider-section">
      <HeadingRow
        title={props.title}
        url={props.url}
        urlTitle={props.urlTitle}
      />
      <Carousel
        customButtonGroup={<CarouselButtonGroup />}
        additionalTransfrom={0}
        arrows={false}
        partialVisible={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite={false}
        itemClass="carouselItem"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1199,
            },
            items: 5,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 1199,
              min: 767,
            },
            items: 2,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 767,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={0}
        itemAriaLabel="Store Slider"
        ariaLabel="Store Slider"
      >
        {props.products &&
          props.products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </Carousel>
    </section>
  );
};
export default ProductSlider;
