import { homeUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import "./riderhome.css";
import { Col, Container, Row } from "react-bootstrap";
const RiderHome = () => {
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
              <img src={homeUrl("images/shopping.png")} alt="shopping" />
            </Col>
            <Col lg={6}>
              <img src={homeUrl("images/door.png")} alt="door" />
            </Col>
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};

export default RiderHome;
