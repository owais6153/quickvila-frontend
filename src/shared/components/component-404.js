import Container from "react-bootstrap/esm/Container";
import { homeUrl } from "../helper";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Component404 = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Helmet>
        <title>404 - Page Not Found | QuiclVila</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <img src={homeUrl("/images/404.webp")} alt="404 icon" className="" />
      <h2>
        Sorry! Page you are requesting <br />
        is not found.
      </h2>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </Container>
  );
};
export default Component404;
