import { homeUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import "./main-home.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const MainHome = () => {
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <section
        className="rider-banner"
        style={{ background: `url('${homeUrl("images/ridder-banner.png")}')` }}
      >
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
