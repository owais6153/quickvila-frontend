import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import CarouselButtonGroup from "../../shared/components/carousel-button-group";
import HeadingRow from "../../shared/components/heading-row";

const ProductCategories = ({ product_categories, id }) => {
  return (
    <section
      className="container slider-section product-cat-slider"
      style={{ paddingTop: "60px" }}
    >
      <HeadingRow title="Categories" />
      {product_categories.length > 0 && (
        <Carousel
          customButtonGroup={<CarouselButtonGroup />}
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
                min: 1199,
              },
              items: 7,
              partialVisibilityGutter: 5,
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
          {product_categories.map((category) => {
            return (
              <div className="product-cat-slider-item">
                <Link
                  to={`/stores/${id}/categories/${category.id}`}
                >{`${category.name}`}</Link>
              </div>
            );
          })}
        </Carousel>
      )}
    </section>
  );
};
export default ProductCategories;
