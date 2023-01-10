import { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import ProductItem from "../components/product/item";
import Pagination from "../shared/components/pagination";
import { Helmet } from "react-helmet";
import { AppContext } from "../shared/context/app-context";

const Search = () => {
  const term = useParams().term;

  const [products, setProducts] = useState(false);
  const [currentPage, setCurrentPages] = useState(1);
  const [pagination, setPagination] = useState(false);
  const { isLoading, sendRequest } = useHttpClient();
  const { geolocation, hasGeoLocation } = useContext(AppContext);
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setProducts();
        const responseData = await sendRequest(
          apiUrl(
            `search/${term}?lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    fetchPlaces();
  }, [term, geolocation, hasGeoLocation]);

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
          apiUrl(
            `search/${term}/?page=${page}&lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage>
      <Helmet>
        <title>Search Products | {process.env.REACT_APP_MY_APP}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title={`You have searched for "${term}"`} />

          {(!products || products.length < 1) && !isLoading && (
            <h3>No Product Found Matching Your Search</h3>
          )}
          {products && products.length > 0 && (
            <Row className="products-list">
              {products.map((product) => {
                return (
                  <Col md={6} xl={3} key={product.id}>
                    <ProductItem product={product} />
                  </Col>
                );
              })}
            </Row>
          )}
          {products && products.length > 0 && pagination && (
            <Pagination links={pagination} onPageChange={chanePage} />
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default Search;
