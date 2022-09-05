import { homeUrl } from "../../shared/helper";
import CarouselButtonGroup from "../../shared/components/carousel-button-group";
import HeadingRow from "../../shared/components/heading-row";
import Carousel from "react-multi-carousel";

const Videos = (props) => {
  return (
    // <section className="home-Sec-five slider-section container"></section>
    <section className="homesec-Six slider-section container">
      <Carousel
        // customButtonGroup={<CarouselButtonGroup />}
        additionalTransfrom={0}
        arrows={false}
        partialVisible={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="col-md-8"
        dotListClass=""
        draggable={true}
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
            items: 1,
            partialVisibilityGutter: 50,
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
        <div className="vid-box">
          <img src={homeUrl("images/Rectangle 10.png")} />
          <div className="vid-butn">
            <img src={homeUrl("images/Group 16.png")} />
          </div>
        </div>
        <div className="vid-box">
          <img src={homeUrl("images/Rectangle 10.png")} />
          <div className="vid-butn">
            <img src={homeUrl("images/Group 16.png")} />
          </div>
        </div>
        <div className="vid-box">
          <img src={homeUrl("images/Rectangle 10.png")} />
          <div className="vid-butn">
            <img src={homeUrl("images/Group 16.png")} />
          </div>
        </div>
      </Carousel>
    </section>
  );
};
export default Videos;
