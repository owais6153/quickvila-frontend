import { useState, useContext, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import StoreItem from "../components/store/item";
import Pagination from "../shared/components/pagination";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AppContext } from "../shared/context/app-context";
const CategoryStore = () => {
  const cat_id = useParams().cid;
  const { sendRequest } = useHttpClient();

  const { geolocation, hasGeoLocation } = useContext(AppContext);
  const [stores, setStores] = useState(false);
  const [currentPage, setCurrentPages] = useState(1);
  const [pagination, setPagination] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var url = `categories/stores?lat=${geolocation.latitude}&long=${geolocation.longitude}`;

        var formdata = new FormData();
        formdata.append("categories[]", cat_id);
        const responseData = await sendRequest(apiUrl(url), "POST", formdata);
        setStores(responseData.stores.data);
        setPagination(responseData.stores.links);
        setCurrentPages(responseData.stores.current_page);
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
        const responseData = await sendRequest(apiUrl(`stores?page=${page}`));
        setStores(responseData.stores.data);
        setPagination(responseData.stores.links);
        setCurrentPages(responseData.stores.current_page);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage>
      <Helmet>
        <title>Category | QuiclVila</title>
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
          <HeadingRow lg title="All Stores" />
          <Row className="stores-list">
            {stores &&
              stores.map((store) => {
                return (
                  <Col md={6} xl={4} key={store.id}>
                    <StoreItem store={store} />
                  </Col>
                );
              })}
            {(!stores || stores.length < 1) && <h3>No Store Found</h3>}
          </Row>
          {pagination && (
            <Pagination links={pagination} onPageChange={chanePage} />
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default CategoryStore;
