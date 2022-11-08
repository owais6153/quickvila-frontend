import Carousel from "react-multi-carousel";
import VideoItem from "../videos/item";

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
        containerClass="col-md-12"
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
              min: 767,
            },
            items: 2,
            partialVisibilityGutter: 50,
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
        {props.videos &&
          props.videos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
      </Carousel>
    </section>
  );
};
export default Videos;
