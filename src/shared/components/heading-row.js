import { Row, Col } from "react-bootstrap";
const HeadingRow = (props) => {
    return(
    <Row className="RRone">
        <Col md={6}>
          <h3>{props.title}</h3>
        </Col>
        <Col md={6}>
            {props.url && 
              <a href={props.url}>See All</a>
            }
        </Col>
    </Row>
    );
}

export default HeadingRow;