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
import { useHttpClient } from "../../hooks/http-hook";
import LocationForm from "../../../components/forms/location-form";
import "./header.css";
const Header = (props) => {
  const {
    cart,
    isLogin,
    toggleLoginModal,
    auth,
    layout,
    setCart,
    geolocation,
    hasGeoLocation,
  } = useContext(AppContext);
  const { sendRequest } = useHttpClient();
  const [cartdropdown, setCartDropdown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [locationdropdown, setLocDropdown] = useState(false);
  const dropdownToggler = () => {
    setDropdown(!dropdown);
  };
  const cartDropdownToggler = () => {
    setCartDropdown(!cartdropdown);
  };
  const locDropdownToggler = () => {
    setLocDropdown(!locationdropdown);
  };

  const logoutHandler = () => {
    const logout = async () => {
      try {
        const responseData = await sendRequest(apiUrl(`logout`), "GET", null, {
          Authorization: `Bearer ${auth._token}`,
        });
        if (responseData.status == 200) {
          auth.logout();
          setCart({});

          toast.success(`Logout Successfully`);
        }
      } catch (err) {}
    };
    logout();
  };

  const content = layout && (
    <Container fluid>
      <div className="mainhead">
        <div className="header-brand">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div
          className="header-locationform pointer"
          onClick={locDropdownToggler}>
          <p>
            <Icon icon="fa fa-map-marker" aria-hidden="true"></Icon>
            <b>Delivering to: </b>{" "}
            <svg
              style={{
                stroke: "#fe0000",
                transform: `rotate(${locationdropdown ? "-90" : "90"}deg)`,
                margin: "0 10px",
              }}
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="svg-stroke-container"
                strokeLinejoin="round"
                strokeLinecap="round"
                fillRule="evenodd"
                fill="none"
                d="m3.5,1.5l5,5.5l-5,5.5"></path>
            </svg>
            {hasGeoLocation ? geolocation.address : "Select your Location"}
          </p>
          {locationdropdown && (
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}>
              <LocationForm />
            </div>
          )}
        </div>
        <div className="header-searchform">
          <SearchForm />
        </div>
        <div className="header-btn">
          <div className="header-btn-group">
            <Link
              to="/"
              // onClick={changeMode("rider")}
              className={`btn px-4 active`}>
              Deliver
            </Link>
            <Link
              to="/shop"
              // onClick={changeMode("customer")}
              className={`btn px-4 `}>
              Order
            </Link>
          </div>
        </div>
        <div className="header-links">
          {isLogin && auth.verified ? (
            <div id="dropdown-variants-" className="dropdown">
              <span onClick={dropdownToggler}>
                <Icon url={homeUrl("images/account.png")} />
              </span>
              {dropdown && (
                <div x-placement="bottom-start" className="dropdown-menu show">
                  <Link className="nav-link" to="/my-account">
                    Account
                  </Link>
                  <a className="nav-link pointer" onClick={logoutHandler}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <span onClick={toggleLoginModal}>
              <Icon url={homeUrl("images/account.png")} />
            </span>
          )}

          <div className="cart-dropdown">
            <div className="cart-icon" onClick={cartDropdownToggler}>
              <Icon url={homeUrl("images/cart.png")}></Icon>
              <span className="cart-count">{cart.count ? cart.count : 0}</span>
            </div>
            {cartdropdown && (
              <div className="header-cart">
                <CartBox cart={cart} actions={true} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Row>
        <Col md={2} className="header-brand"></Col>
        <Col md={4} className="header-btn">
          <div className="header-btn-group"></div>
        </Col>
        <Col md={4}>
          <SearchForm />
        </Col>
        <Col md={1}></Col>
        <Col md={1} className="header-links"></Col>
      </Row> */}
    </Container>
  );
  return createPortal(content, document.getElementById("header"));
};

export default Header;
