import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Component404 = () => {
  return (
    <div id="error-boundry">
      <Helmet>
        <title>Opps! Page not found | {process.env.REACT_APP_MY_APP}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <div className="catch">
        <h1>Opps! Page not found.</h1>
        <p>The page you are looking for is not found on this url.</p>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default Component404;
