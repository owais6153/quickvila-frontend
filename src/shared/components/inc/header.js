import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/app-context";
import { homeUrl } from "../../helper";
import { apiUrl } from "../../helper";
import { toast } from "react-toastify";
import Logo from "./logo";
import Icon from "../font-awesome-icon";
import SearchForm from "../../../components/forms/search-form";
import CartBox from "../../../components/cart/cart-box";
import Dropdown from "react-bootstrap/Dropdown";
import "./header.css";
import { useHttpClient } from "../../hooks/http-hook";
const Header = (props) => {
  const { cart, isLogin, toggleLoginModal, auth, mode, changeMode } =
    useContext(AppContext);
  const { sendRequest } = useHttpClient();
  const [cartdropdown, setCartDropdown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownToggler = () => {
    setDropdown(!dropdown);
  };
  const cartToggler = () => {
    setCartDropdown(!cartdropdown);
  };

  const logoutHandler = () => {
    const logout = async () => {
      try {
        const responseData = await sendRequest(apiUrl(`logout`), "GET", null, {
          Authorization: `Bearer ${auth._token}`,
        });
        if (responseData.status == 200) {
          auth.logout();
          toast.success(`Logout Successfully`);
        }
      } catch (err) {}
    };
    logout();
  };

  const content = (
    <Container>
      <Row>
        <Col md={2} className="header-brand">
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col md={4} className="header-btn">
          <div className="header-btn-group">
            <a
              href="/rider"
              // onClick={changeMode("rider")}
              className={`btn px-4 ${mode === "rider" && "btn-active"}`}
            >
              Deliver
            </a>
            <a
              href="/"
              // onClick={changeMode("customer")}
              className={`btn px-4 ${mode === "customer" && "btn-active"}`}
            >
              Order
            </a>
          </div>
        </Col>
        <Col md={4}>
          <SearchForm />
        </Col>
        <Col md={1}></Col>
        <Col md={1} className="header-links">
          {isLogin && auth.verified ? (
            <Dropdown id={`dropdown-variants-`}>
              <span onClick={dropdownToggler}>
                <Icon url={homeUrl("images/account.png")} />
              </span>
              {dropdown && (
                <Dropdown.Menu show>
                  <Link className="nav-link" to="/my-account">
                    Account
                  </Link>
                  <a className="nav-link pointer" onClick={logoutHandler}>
                    Logout
                  </a>
                </Dropdown.Menu>
              )}
            </Dropdown>
          ) : (
            <span onClick={toggleLoginModal}>
              <Icon url={homeUrl("images/account.png")} />
            </span>
          )}

          <div className="cart-dropdown">
            <div className="cart-icon" onClick={cartToggler}>
              <Icon url={homeUrl("images/cart.png")}></Icon>
              <span className="cart-count">
                {isLogin && cart.count ? cart.count : 0}
              </span>
            </div>
            {cartdropdown && (
              <div className="header-cart">
                <CartBox cart={cart} login={isLogin} actions />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
  return createPortal(content, document.getElementById("header"));
};

export default Header;
