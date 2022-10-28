import { Container, Row, Col } from "react-bootstrap";
import { homeUrl } from "../../shared/helper";
import { toast } from "react-toastify";
import PlacesInput from "../../shared/components/form-elements/places-input";
const Banner = () => {
  const BackgroundStyle = {
    backgroundImage: `url('${homeUrl("images/Banner.png")}')`,
    minHeight: "620px",
  };
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
      },
      function (error) {
        toast.error(`${error.message}, Please reset your location permission`);
      }
    );
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
            <form className="baner-form">
              {/* <PlacesInput /> */}
              <input
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
                value="search"
              />
              {"geolocation" in navigator && (
                <div className="ser-icon" onClick={getUserLocation}>
                  <img
                    src={homeUrl("images/Vectory (1).png")}
                    alt="Get Geolocation"
                  />
                </div>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
