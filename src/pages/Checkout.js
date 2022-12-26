import { useContext, useEffect } from "react";
import { AppContext } from "../shared/context/app-context";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "../shared/hooks/form-hook";
import { useLoading } from "../shared/hooks/loader-hook";
import { apiUrl } from "../shared/helper";
import { useHttpClient } from "../shared/hooks/http-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../shared/util/validation";
import { toast } from "react-toastify";

import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import StaticPage from "../shared/components/staticpages";
import HeadingRow from "../shared/components/heading-row";
import CartBox from "../components/cart/cart-box";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const { isLogin, auth, cart, geolocation } = useContext(AppContext);
  const { setIsLoading } = useLoading(true);
  const { sendRequest } = useHttpClient();
  const onPageLoad = (value) => {
    setIsLoading(value);
  };

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
        isValid: false,
      },
      address2: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    setFormData(
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
          value: geolocation ? geolocation.address : "",
          isValid: true,
        },
        address2: {
          value: "",
          isValid: false,
        },
      },
      false
    );
  }, [geolocation]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      return;
    }

    var url = apiUrl("checkout");
    var data = JSON.stringify({
      email: formState.inputs.email.value,
      name: formState.inputs.name.value,
      phone: formState.inputs.phone.value,
      note: formState.inputs.note.value,
      address1: formState.inputs.note.address1,
      address2: formState.inputs.note.address2,
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
    });
    try {
      var responseData = await sendRequest(url, "POST", data, {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth._token}`,
      });

      if (responseData.status === 200) {
        window.location.replace(`order/${responseData.order.id}`);
      }
      return true;
    } catch (err) {}
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
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
                          readOnly="readonly"
                          className="form-control"
                          placeholder="Full Name"
                          validators={[VALIDATOR_REQUIRE("Name is required.")]}
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
                          readOnly="readonly"
                          validators={[
                            VALIDATOR_REQUIRE("Email is required."),
                            VALIDATOR_EMAIL("Please enter a valid email"),
                          ]}
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
                          validators={[VALIDATOR_REQUIRE("Phone is required.")]}
                        />
                      </div>
                    </Col>
                    <Col md={12} className="mt-4  mb-3">
                      <h3>Shipping Info</h3>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <input
                          onInput={inputHandler}
                          type="text"
                          name="address1"
                          id="address1"
                          className="form-control"
                          placeholder="Address 1"
                          disabled="disabled"
                          readonly="readonly"
                          value={geolocation.address}
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
                          ]}
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
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="form-group">
                    {/* <Button
                      type="submit"
                      className="btn-primary w-100"
                      text="Checkout"
                      disable={true}
                    /> */}
                    <div className="alert alert-danger">
                      No Payment Method is set.
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <h3>Products</h3>
                  <CartBox cart={cart} login={isLogin} />
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
