import { homeUrl } from "../../shared/helper";

const Testimonials = (props) => {
  return (
    <section className="home-Sec-five">
      <div className="container">
        <div className="row RRone">
          <div className="col-md-6">
            <h3>Testimonials</h3>
          </div>
          <div className="col-md-6">
            <a href="#">See All</a>
            <a href="#">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-box">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                libero cras quis eu pretium tincidunt. Odio eget felis morbi
                tristique auctor porttitor orci tempor gravida pellentesque.
                Egestas nunc tempor gravida velit.”
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
          </div>
          <div className="col-md-6">
            <div className="testimonial-box">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                libero cras quis eu pretium tincidunt. Odio eget felis morbi
                tristique auctor porttitor orci tempor gravida pellentesque.
                Egestas nunc tempor gravida velit.”
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
