import { Spinner } from "react-bootstrap";
const Loader = () => {
  const style = {
    position: "fixed",
    height: "100vh",
    width: "100vw",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  };
  return (
    <div className="_loader" style={style}>
      <Spinner animation="border" role="status" variant="light" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loader;
