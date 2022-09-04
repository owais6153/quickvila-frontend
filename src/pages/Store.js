import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import StoreItem from "../components/store/item";
const Store = () => {
  const { sendRequest } = useHttpClient();

  const [stores, setStores] = useState(false);
  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("home"));
        setStores(responseData.stores);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage getData={getData}>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="All Stores" />
          <Row className="stores-list">
            {stores &&
              stores.map((store) => {
                return (
                  <Col md={4} key={store.id}>
                    <StoreItem store={store}></StoreItem>
                  </Col>
                );
              })}
            {!stores && <h3>No Store Found</h3>}
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};
export default Store;
