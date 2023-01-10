import { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import CategoryItem from "../components/category/item";
import { Helmet } from "react-helmet";
import { AppContext } from "../shared/context/app-context";
const StoreCategories = () => {
  const { isLoading, sendRequest } = useHttpClient();
  const { geolocation, hasGeoLocation } = useContext(AppContext);

  const [categories, setCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          apiUrl(
            `categories/stores?lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        setCategories(responseData.categories);
      } catch (err) {}
    };
    fetchData();
  }, [geolocation, hasGeoLocation]);

  return (
    <StaticPage>
      <Helmet>
        <title>Categories | {process.env.REACT_APP_MY_APP}</title>
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
          <HeadingRow lg title="All Categories" />
          {(!categories || categories.length < 1) && !isLoading && (
            <h3>No Category Found</h3>
          )}
          <Row className="stores-list">
            {categories &&
              categories.length > 0 &&
              categories.map((category) => {
                return (
                  <Col md={3} xl={2} key={category.id}>
                    <CategoryItem category={category} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};
export default StoreCategories;
