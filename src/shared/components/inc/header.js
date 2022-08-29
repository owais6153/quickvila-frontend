import { Container, Row, Col } from "react-bootstrap";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Logo from "./logo";
import SearchForm from "../../../components/forms/search-form";
import "./header.css";
// import Icon from "../font-awesome-icon";
import { useContext } from "react";
import Loader from "../loader";
import { useLoading } from "../../hooks/loader-hook";
const Header = (props) => {
  const { isLoading, setIsLoading } = useLoading(false);

  const content = (
    <Container>
      {isLoading && <Loader />}
      <Row>
        <Col md={1} className="header-brand">
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col md={3} className="header-btn">
          <div className="header-btn-group">
            <a href="#" className="btn px-4 btn-active">
              Deliver
            </a>
            <a className="btn px-4">Order</a>
          </div>
        </Col>
        <Col md={4}>
          <SearchForm />
        </Col>
        <Col md={1}></Col>
        <Col md={3} className="header-links">
          <Link to="/cart">Account</Link>
          <Link to="/cart">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </Col>
      </Row>
    </Container>
  );
  return createPortal(content, document.getElementById("header"));
};

export default Header;
