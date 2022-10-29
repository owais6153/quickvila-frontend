import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeadingRow = (props) => {
  return (
    <Row className="RRone">
      <Col md={props.url ? 6 : 10} sm={props.url ? 6 : 12}>
        {props.lg ? <h2>{props.title}</h2> : <h3>{props.title}</h3>}
      </Col>
      <Col md={6} sm={6}>
        {props.url && <Link to={props.url}>See All</Link>}
      </Col>
    </Row>
  );
};

export default HeadingRow;
