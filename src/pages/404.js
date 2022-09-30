import Container from "react-bootstrap/esm/Container";
import StaticPage from "../shared/components/staticpages";
import { homeUrl } from "../shared/helper";
import { useLoading } from "../shared/hooks/loader-hook";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
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
    </StaticPage>
  );
};
export default PageNotFound;
