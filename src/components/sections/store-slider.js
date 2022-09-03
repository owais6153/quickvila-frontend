import StoreItem from "../store/item";
import Carousel from "react-multi-carousel";
import HeadingRow from "../../shared/components/heading-row";
import CarouselButtonGroup from "../../shared/components/carousel-button-group";

const StoreSlider = (props) => {
  return (
    <section className="home-sec-one slider-section container">
      <HeadingRow title="All Stores" url="#"/>
      <Carousel
        customButtonGroup={<CarouselButtonGroup/>}
        additionalTransfrom={0}
        arrows={false}
        partialVisible={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
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
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
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
        <StoreItem ariaLabel="product-slieder" />
        <StoreItem ariaLabel="product-slieder" />
        <StoreItem ariaLabel="product-slieder" />
        <StoreItem ariaLabel="product-slieder" />
      </Carousel>
    </section>
  );
};
export default StoreSlider;
