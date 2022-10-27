import Container from "react-bootstrap/esm/Container";
import { homeUrl } from "../shared/helper";
import { Link } from "react-router-dom";

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
