import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AppContext } from "../context/app-context";
const ComponentAuthError = () => {
  const { toggleLoginModal } = useContext(AppContext);
  return (
    <div id="error-boundry">
      <Helmet>
        <title>Plaease Login First | {process.env.REACT_APP_MY_APP}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <div className="catch">
        <h1>Please login first.</h1>
        <p>You are not login, Please login to access this resource.</p>
        <a className="btn btn-primary" onClick={toggleLoginModal}>
          Login
        </a>
      </div>
    </div>
  );
};
export default ComponentAuthError;
