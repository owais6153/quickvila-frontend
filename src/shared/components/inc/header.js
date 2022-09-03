import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/app-context";
import { homeUrl } from "../../helper";
import Logo from "./logo";
import Icon from "../font-awesome-icon";
import SearchForm from "../../../components/forms/search-form";
import HeaderCartDropdown from "./header-cart-dropdown";

import "./header.css";
const Header = (props) => {
  const { cart, isLogin, toggleLoginModal,auth } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);
  const cartToggler = () => {
    setDropdown(!dropdown);
  };

  const content = (
    <Container>
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
          {isLogin && auth.verified ? (
            <Link to="/cart">
              <Icon url={homeUrl("images/account.png")}></Icon>
            </Link>
          ) : (
            <span onClick={toggleLoginModal}>
              <Icon url={homeUrl("images/account.png")} />
            </span>
          )}

          {isLogin && auth.verified ? (
            <Link to="/cart">
              <Icon url={homeUrl("images/Vector.png")}></Icon>
            </Link>
          ) : (
            <span onClick={toggleLoginModal}>
              <Icon url={homeUrl("images/Vector.png")} />
            </span>
          )}

          <div className="cart-dropdown">
            <div className="cart-icon" onClick={cartToggler}>
              <Icon url={homeUrl("images/cart.png")}></Icon>
              <span className="cart-count"> {cart.count}</span>
            </div>
            {dropdown && <HeaderCartDropdown cart={cart} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
  return createPortal(content, document.getElementById("header"));
};

export default Header;
