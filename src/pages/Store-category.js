import { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import CategoryItem from "../components/category/item";
import { Helmet } from "react-helmet";
const StoreCategories = () => {
  const { sendRequest } = useHttpClient();

  const [categories, setCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("categories/stores"));
        setCategories(responseData.categories);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <StaticPage>
      <Helmet>
        <title>Categories | QuiclVila</title>
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
          {(!categories || categories.length < 1) && <h3>No Category Found</h3>}
          <Row className="stores-list">
            {categories &&
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
