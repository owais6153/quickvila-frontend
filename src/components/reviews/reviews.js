import { Container, Col, Row } from "react-bootstrap";
import HeadingRow from "../../shared/components/heading-row";
import "./reviews.css";
const Reviews = ({ reviews }) => {
  return (
    <section className="reviews pb-5">
      <Container>
        <HeadingRow title="Reviews" />
        <Row>
          {reviews.map((review) => {
            return (
              <Col md={6} key={review.id}>
                <div className="review mt-4">
                  <div className="author-detail">
                    <img src={review.author.avatar} alt={review.author.name} />
                    <p className="author_name">{review.author.name}</p>
                    <p className="product_rating">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      {review.rating}
                    </p>
                  </div>
                  <div className="content">
                    <p>{review.comment}</p>
                    <p className="date">{review.created_at}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default Reviews;
