import { homeUrl } from "../../shared/helper";
import CarouselButtonGroup from "../../shared/components/carousel-button-group";
import HeadingRow from "../../shared/components/heading-row";
import Carousel from "react-multi-carousel";

const Testimonials = (props) => {
  return (
    <section className="home-Sec-five slider-section container">
      <HeadingRow title="Testimonials" url="#" />
      <Carousel
        customButtonGroup={<CarouselButtonGroup />}
        additionalTransfrom={0}
        arrows={false}
        partialVisible={false}
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
            items: 2,
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
        <div className="testimonial-box">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            libero cras quis eu pretium tincidunt. Odio eget felis morbi
            tristique auctor porttitor orci tempor gravida pellentesque. Egestas
            nunc tempor gravida velit.”
          </p>
          <div className="testimonial-figure">
            <img src={homeUrl("images/Image.png")} />
            <div className="T-fig-ctn">
              <h4>Mike Taylor</h4>
              <h5>Lorem ipsum dolor</h5>
              <img src={homeUrl("images/Vector (1).png")} />
            </div>
          </div>
        </div>
        <div className="testimonial-box">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            libero cras quis eu pretium tincidunt. Odio eget felis morbi
            tristique auctor porttitor orci tempor gravida pellentesque. Egestas
            nunc tempor gravida velit.”
          </p>
          <div className="testimonial-figure">
            <img src={homeUrl("images/Image.png")} />
            <div className="T-fig-ctn">
              <h4>Mike Taylor</h4>
              <h5>Lorem ipsum dolor</h5>
              <img src={homeUrl("images/Vector (1).png")} />
            </div>
          </div>
        </div>
        <div className="testimonial-box">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            libero cras quis eu pretium tincidunt. Odio eget felis morbi
            tristique auctor porttitor orci tempor gravida pellentesque. Egestas
            nunc tempor gravida velit.”
          </p>
          <div className="testimonial-figure">
            <img src={homeUrl("images/Image.png")} />
            <div className="T-fig-ctn">
              <h4>Mike Taylor</h4>
              <h5>Lorem ipsum dolor</h5>
              <img src={homeUrl("images/Vector (1).png")} />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
export default Testimonials;
