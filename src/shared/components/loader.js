import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="_loader">
      <Spinner animation="border" role="status" variant="light" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loader;
