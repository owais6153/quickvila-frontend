import { Container, Row, Col } from "react-bootstrap";
import { homeUrl } from "../../shared/helper";
import LocationForm from "../forms/location-form";

const Banner = () => {
  const BackgroundStyle = {
    backgroundImage: `url('${homeUrl("images/Banner.png")}')`,
    minHeight: "620px",
  };

  return (
    <section style={BackgroundStyle} className="center">
      <Container>
        <Row>
          <Col lg={6}>
            <h1>
              Bracket Holder
              <br />& Camera Stand
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Sit rhoncus non, ultricies enim eget adipiscing orci
              <br />
              malesuada mauris. Orci tellus ut ornare varius sed massa
              <br />
              quis vel.
            </p>
            <Col md={10}>
              <LocationForm />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
