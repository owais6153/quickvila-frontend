import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../shared/context/app-context";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "../shared/hooks/form-hook";
import { apiUrl } from "../shared/helper";
import { useHttpClient } from "../shared/hooks/http-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../shared/util/validation";
import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import CartBox from "../components/cart/cart-box";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const {
    isLogin,
    auth,
    cart,
    setCart,
    identifier,
    geolocation,
    toggleLoginModal,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const { sendRequest } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      note: {
        value: "",
        isValid: true,
      },
      address1: {
        value: "",
        isValid: true,
      },
      address2: {
        value: "",
        isValid: false,
      },
      tip: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      return;
    }

    var url = apiUrl(`checkout?identifier=${identifier}`);
    var data = JSON.stringify({
      email: formState.inputs.email.value,
      name: formState.inputs.name.value,
      phone: formState.inputs.phone.value,
      note: formState.inputs.note.value,
      address1: formState.inputs.address1.value,
      address2: formState.inputs.address2.value,
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
      tip: formState.inputs.tip.value,
    });
    try {
      var responseData = await sendRequest(url, "POST", data, {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth._token}`,
      });

      if (responseData.status === 200) {
        setCart({});
        navigate(`/order/${responseData.order.id}`);
      }
      return true;
    } catch (err) {}
  };
  return (
    <StaticPage>
      <Helmet>
        <title>Checkout | QuiclVila</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="Checkout" />
          {!cart.count || cart.count < 1 ? (
            <h3>No product in Cart</h3>
          ) : (
            <Row>
              <form id="checkoutForm" onSubmit={submitHandler} className="row">
                <Col lg={8} className="mb-md-5">
                  <Row>
                    <Col md={12} className=" mb-3">
                      <h3>Personal Info</h3>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <Input
                          onInput={inputHandler}
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          validators={[
                            VALIDATOR_REQUIRE("Name is required."),
                            VALIDATOR_MINLENGTH(
                              3,
                              "Please enter a valid name."
                            ),
                          ]}
                          initialValid={isLogin && auth.user.name}
                          initialValue={auth.user.name}
                          readOnly={isLogin && auth.user.name}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <Input
                          id="email"
                          onInput={inputHandler}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          validators={[
                            VALIDATOR_REQUIRE("Email is required."),
                            VALIDATOR_EMAIL("Please enter a valid email"),
                          ]}
                          initialValid={isLogin && auth.user.email}
                          initialValue={auth.user.email}
                          readOnly={isLogin && auth.user.email}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <Input
                          id="phone"
                          onInput={inputHandler}
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          validators={[
                            VALIDATOR_REQUIRE("Phone is required."),
                            VALIDATOR_MINLENGTH(
                              3,
                              "Please enter a valid phone."
                            ),
                            VALIDATOR_MAXLENGTH(
                              14,
                              "Please enter a valid phone."
                            ),
                          ]}
                          initialValid={isLogin && auth.user.phone}
                          initialValue={auth.user.phone}
                          readOnly={isLogin && auth.user.phone}
                        />
                      </div>
                    </Col>
                    <Col md={12} className="mt-4  mb-3">
                      <h3>Shipping Info</h3>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <Input
                          onInput={inputHandler}
                          type="text"
                          name="address1"
                          id="address1"
                          className="form-control"
                          placeholder="Address 1"
                          disabled="disabled"
                          readOnly="readonly"
                          initialValue={geolocation.address}
                          initialValid={true}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <Input
                          onInput={inputHandler}
                          type="text"
                          name="address2"
                          id="address2"
                          className="form-control"
                          placeholder="Address 2"
                          validators={[
                            VALIDATOR_REQUIRE("Address 2 is required."),
                            VALIDATOR_MINLENGTH(
                              3,
                              "Please enter a valid address."
                            ),
                          ]}
                          initialValid={false}
                        />
                      </div>
                    </Col>
                    <Col md={12} className="mt-4  mb-3">
                      <h3>Extra Info</h3>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <Input
                          onInput={inputHandler}
                          type="textarea"
                          name="note"
                          id="note"
                          className="form-control"
                          placeholder="Order Note"
                          initialValid={true}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4}>
                  <h3>Cart Info</h3>
                  <CartBox cart={cart} login={isLogin} />

                  <div className="form-group mt-4">
                    <Input
                      onInput={inputHandler}
                      type="number"
                      name="tip"
                      id="tip"
                      min={0}
                      className="form-control"
                      placeholder="Want to give Tip?"
                      initialValid={true}
                    />
                  </div>
                  {!isLogin && (
                    <Button
                      type="button"
                      onClick={toggleLoginModal}
                      className="btn-primary w-100 mt-4"
                      text="Login"
                    />
                  )}
                  {!auth.verified && isLogin && (
                    <Button
                      type="button"
                      onClick={toggleLoginModal}
                      className="btn-primary w-100 mt-4"
                      text="Verify your account"
                    />
                  )}
                  {auth.verified && isLogin && (
                    <Button
                      type="submit"
                      className="btn-primary w-100 mt-4"
                      text="Pay now"
                    />
                  )}
                </Col>
              </form>
            </Row>
          )}
        </Container>
      </section>
    </StaticPage>
  );
};
export default Checkout;
