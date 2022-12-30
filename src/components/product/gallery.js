import Carousel from "react-multi-carousel";

const ProductGallery = ({ gallery, changeImage }) => {
  return (
    <Carousel
      customButtonGroup={false}
      additionalTransfrom={0}
      arrows={false}
      partialVisible={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="gallery-slider"
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
          items: 5,
          partialVisibilityGutter: 0,
        },
        mobile: {
          breakpoint: {
            max: 767,
            min: 0,
          },
          items: 5,
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
      {gallery.map((image, index) => {
        return (
          <img
            src={image}
            key={index}
            onClick={() => changeImage(image)}
            className="pointer"
          />
        );
      })}
    </Carousel>
  );
};
export default ProductGallery;
