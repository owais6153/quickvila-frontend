import React from "react";
import { createPortal } from "react-dom";
import { homeUrl } from "../../helper";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/app-context";
import { useContext } from "react";
import ModalPopup from "../modal.js";
import Auth from "../../../auth/auth";
import Verify from "../../../auth/verify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const { toggleLoginModal, loginModal, isLogin, auth } =
    useContext(AppContext);
  const content = (
    <React.Fragment>
      <Container fluid style={{ padding: "0px" }}>
        <div className="foot-Rone">
          <Container>
            <Row>
              <Col md={4}>
                <img
                  src={homeUrl("images/Trikro-White 1.png")}
                  alt="Trikaro Logo"
                />
              </Col>
              <Col md={4}>
                <ul className="ul-N">
                  <li>Returns</li>
                  <li>Privacy</li>
                  <li>FAQs</li>
                </ul>
              </Col>
              <Col md={4}>
                <ul className="ul-Sicons">
                  <li>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <h3>
                <img src={homeUrl("images/Vecto.png")} alt="Newsletter Icon" />
                Signup For Newsletter
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                integer fusce turpis vel tortor ornare.
              </p>
            </Col>
            <Col md={2}>
              <h3>About Us</h3>
              <ul>
                <li>our story</li>
                <li>our team</li>
                <li>blogs</li>
              </ul>
            </Col>
            <Col md={2}>
              <h3>help</h3>
              <ul>
                <li>FAQs</li>
                <li>feadback</li>
              </ul>
            </Col>
            <Col md={2}>
              <h3>privacy</h3>
              <ul>
                <li>term of use</li>
                <li>privacy and security</li>
              </ul>
            </Col>
            <Col md={2} className="last">
              <h3>gallery</h3>
              <div className="footer-gallery">
                <img src={homeUrl("images/Rectangle 24.png")} alt="gallery-1" />
                <img src={homeUrl("images/Rectangle 25.png")} alt="gallery-2" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {!isLogin && (
        <ModalPopup
          size="md"
          title="Login"
          show={loginModal}
          onHide={toggleLoginModal}
        >
          <Auth />
        </ModalPopup>
      )}
      {isLogin && !auth.verified && (
        <ModalPopup
          size="md"
          title="Login"
          show={loginModal}
          onHide={toggleLoginModal}
        >
          <Verify />
        </ModalPopup>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
  return createPortal(content, document.getElementById("footer"));
};

export default Footer;
