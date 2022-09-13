import { homeUrl } from "../../shared/helper";

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="testimonial-box">
      <p>{testimonial.description}</p>
      <div className="testimonial-figure">
        <img src={testimonial.image} alt={testimonial.title} />
        <div className="T-fig-ctn">
          <h4>{testimonial.title}</h4>
          <h5>{testimonial.subtitle}</h5>
          <img src={homeUrl("images/Vector (1).png")} alt="quote-icon" />
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
