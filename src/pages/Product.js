import { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import ProductItem from "../components/product/item";
import Pagination from "../shared/components/pagination";
import { Helmet } from "react-helmet";
import { AppContext } from "../shared/context/app-context";
const Product = () => {
  const { geolocation, hasGeoLocation } = useContext(AppContext);

  const { isLoading, sendRequest } = useHttpClient();
  const [products, setProducts] = useState(false);
  const [currentPage, setCurrentPages] = useState(1);
  const [pagination, setPagination] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          apiUrl(
            `products?lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    if (hasGeoLocation) fetchData();
  }, [geolocation, hasGeoLocation]);

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
            `products?page=${page}&lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          // behavior: "instant",
        });
      } catch (err) {}
    };
    if (hasGeoLocation) fetchData();
  };

  return (
    <StaticPage>
      <Helmet>
        <title>All Products | QuiclVila</title>
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
          <HeadingRow lg title="All Products" />
          {(!products || products.length < 1) && !isLoading && (
            <h3>No Product Found</h3>
          )}
          <Row className="products-list">
            {products &&
              products.length > 0 &&
              products.map((product) => {
                return (
                  <Col md={6} xl={3} key={product.id}>
                    <ProductItem product={product} />
                  </Col>
                );
              })}
          </Row>
          {products && products.length > 0 && pagination && (
            <Pagination links={pagination} onPageChange={chanePage} />
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default Product;
