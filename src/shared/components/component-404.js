import { Helmet } from "react-helmet";
// import { useContext } from "react";
// import { AppContext } from "../context/app-context";
const Component404 = () => {
  // const { setLayout } = useContext(AppContext);
  // setLayout(() => false);
  return (
    <div id="error-boundry">
      <Helmet>
        <title>Opps! Page not found | QuiclVila</title>
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
        <a href="/" className="btn btn-primary">
          Go to Home
        </a>
      </div>
    </div>
  );
};
export default Component404;
