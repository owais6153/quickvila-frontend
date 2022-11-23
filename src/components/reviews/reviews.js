import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { apiUrl } from "../../shared/helper";
import HeadingRow from "../../shared/components/heading-row";
import Pagination from "../../shared/components/pagination";
import "./reviews.css";
const Reviews = ({ reviews, updateReviews, store_id, product_id }) => {
  const [pagination, setPagination] = useState(reviews.links);
  const [currentPage, setCurrentPages] = useState(1);

  const { sendRequest } = useHttpClient();
  const chanePage = (e) => {
    e.preventDefault();
    var page = e.target.getAttribute("data-page");
    if (page == "prev") {
      page = currentPage - 1;
    } else if (page == "next") {
      page = parseInt(currentPage) + 1;
    }
    if (page == null) {
      page = 1;
    }

    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          apiUrl(`stores/${store_id}/products/${product_id}?page=${page}`)
        );
        updateReviews(responseData.reviews);
        setPagination(responseData.reviews.links);
        setCurrentPages(responseData.reviews.current_page);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <section className="reviews pb-5">
      <Container>
        <HeadingRow title="Reviews" />
        <Row>
          {reviews.data.map((review) => {
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
          <Col xs={12} className="pt-4">
            {pagination && (
              <Pagination links={pagination} onPageChange={chanePage} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Reviews;
