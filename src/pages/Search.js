import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import ProductItem from "../components/product/item";
import Pagination from "../shared/components/pagination";

const Search = () => {
  const term = useParams().term;

  const [products, setProducts] = useState(false);
  const [currentPage, setCurrentPages] = useState(1);
  const [pagination, setPagination] = useState(false);
  const { isLoading, sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setProducts();
        const responseData = await sendRequest(apiUrl(`search/${term}`));
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, term]);

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
        const responseData = await sendRequest(apiUrl(`search/${term}/?page=${page}`));
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    fetchData();
  };


  return (
    <StaticPage >
      <section className="no-banner">
        <Container>
          <HeadingRow lg title={`You have searched for "${term}"`} />
          <Row className="products-list">
            {products &&
              products.map((product) => {
                return (
                  <Col md={3} key={product.id}>
                    <ProductItem product={product} />
                  </Col>
                );
              })}
            {!products && <h3>No Product Found Matching Your Search</h3>}
          </Row>
          {pagination && (
            <Pagination links={pagination} onPageChange={chanePage} />
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default Search;
