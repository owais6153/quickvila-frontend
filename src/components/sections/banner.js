import { Container, Row, Col } from "react-bootstrap";
import { homeUrl } from "../../shared/helper";
const Banner = () => {
  const BackgroundStyle = {
    backgroundImage: `url('${homeUrl("images/Banner.png")}')`,
    minHeight: "620px",
  };
  return (
    <section style={BackgroundStyle} className="center">
      <Container>
        <Row>
          <Col md={6}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
