import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import ProductItem from "../components/product/item";
import Pagination from "../shared/components/pagination";
const Product = () => {
  const { sendRequest } = useHttpClient();

  const [products, setProducts] = useState(false);
  const [currentPage, setCurrentPages] = useState(1);
  const [pagination, setPagination] = useState(false);

  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("products"));
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    fetchData();
  };

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
        const responseData = await sendRequest(apiUrl(`products?page=${page}`));
        setProducts(responseData.products.data);
        setPagination(responseData.products.links);
        setCurrentPages(responseData.products.current_page);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage getData={getData}>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="All Products" />
          <Row className="products-list">
            {products &&
              products.map((product) => {
                return (
                  <Col md={6} lg={3} key={product.id}>
                    <ProductItem product={product} />
                  </Col>
                );
              })}
            {!products && <h3>No Product Found</h3>}
          </Row>
          {pagination && (
            <Pagination links={pagination} onPageChange={chanePage} />
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default Product;
