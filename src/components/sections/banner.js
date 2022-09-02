import { Container, Row, Col } from "react-bootstrap";
import { homeUrl } from "../../shared/helper";
import { toast } from 'react-toastify';
const Banner = () => {
  const BackgroundStyle = {
    backgroundImage: `url('${homeUrl("images/Banner.png")}')`,
    minHeight: "620px",
  };
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position);
      },
      function(error) {
        toast.error(`You have rejected your location permisssion`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
       
      }
    );
  }
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
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your full address"
              />
              <input type="submit" value="search" />
              {"geolocation" in navigator && <div className="ser-icon" onClick={getUserLocation}>
                <img src={homeUrl("images/Vectory (1).png")} />
              </div>}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
