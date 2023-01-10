import { homeUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./main-home.css";
const MainHome = () => {
  return (
    <StaticPage>
      <Helmet>
        <title>Home | {process.env.REACT_APP_MY_APP}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <section
        className="rider-banner"
        style={{ background: `url('${homeUrl("images/ridder-banner.png")}')` }}>
        <img src={homeUrl("images/Group 16.png")} alt="videoplayer" />
      </section>
      <section className="flow-section">
        <Container>
          <Row>
            <Col lg={6}>
              <Link to="/shop">
                <img src={homeUrl("images/shopping.png")} alt="shopping" />
              </Link>
            </Col>
            <Col lg={6}>
              <Link to="/">
                <img src={homeUrl("images/door.png")} alt="door" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};

export default MainHome;
