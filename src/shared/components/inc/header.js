import { Container, Row, Col } from "react-bootstrap";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import { useLoading } from "../../hooks/loader-hook";
import { homeUrl } from "../../helper";
import Logo from "./logo";
import Icon from "../font-awesome-icon";
import Loader from "../loader";
import SearchForm from "../../../components/forms/search-form";
import "./header.css";
const Header = (props) => {
  const { isLoading, setIsLoading } = useLoading(false);
  const { cart } = useContext(AppContext);

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
        <Col md={5}>
          <SearchForm />
        </Col>
        <Col md={1}></Col>
        <Col md={2} className="header-links">
          <Link to="/cart">
            <Icon url={homeUrl("images/account.png")}></Icon>
          </Link>
          <Link to="/cart">
            <Icon url={homeUrl("images/Vector.png")}></Icon>
          </Link>
          <span>
            <Icon url={homeUrl("images/cart.png")}></Icon>
            <span className="cart-count"> {cart.count}</span>
          </span>
        </Col>
      </Row>
    </Container>
  );
  return createPortal(content, document.getElementById("header"));
};

export default Header;
