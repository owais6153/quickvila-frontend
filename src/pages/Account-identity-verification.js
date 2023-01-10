import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../shared/context/app-context";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import Sidebar from "../shared/components/sidebar";
import { Helmet } from "react-helmet";
import { useForm } from "../shared/hooks/form-hook";
import { apiUrl } from "../shared/helper";
import { useHttpClient } from "../shared/hooks/http-hook";
import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
import { toast } from "react-toastify";
import { VALIDATOR_REQUIRE } from "../shared/util/validation";

const VerificationStatusText = ({ auth }) => {
  if (auth.user.is_identity_card_verified) {
    return (
      <>
        <h2>Your identity is verified.</h2>
        <p>Thankyou for verifying your identity.</p>
      </>
    );
  } else if (
    !auth.user.is_identity_card_verified &&
    auth.user.identity_card !== null
  ) {
    return (
      <>
        <h2>Your identity card verification is under process.</h2>
        <p>
          Please be patient, We are reviewing your identity card, We will update
          you soon.
        </p>
      </>
    );
  }
};

const AccountIdentityVerification = () => {
  const { auth, isLogin, updateUserInfo } = useContext(AppContext);
  const [shouldDisplayForm, setShouldDisplayForm] = useState(false);
  const fileInput = useRef(null);

  const { sendRequest } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      identity_card: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (auth.user.is_identity_card_verified) {
      setShouldDisplayForm(false);
    } else if (
      !auth.user.is_identity_card_verified &&
      auth.user.identity_card !== null
    ) {
      setShouldDisplayForm(false);
    } else {
      setShouldDisplayForm(true);
    }
  }, [auth]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      return;
    }

    const formData = new FormData();
    const file = fileInput.current.files[0];
    formData.append("identity_card", file);

    var url = apiUrl(`account/verify-identity`);

    var responseData = await sendRequest(url, "POST", formData, {
      Authorization: `Bearer ${auth._token}`,
    });
    if (responseData.status === 200) {
      toast.success(`Identity Verification Request has been submited.`);
      updateUserInfo(responseData.user);
    }
  };

  return (
    <StaticPage isLogin={isLogin} authRequired={true}>
      <Helmet>
        <title>
          Verify Identity - My Account | {process.env.REACT_APP_MY_APP}
        </title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <section className="no-banner account-pages">
        <Container>
          <HeadingRow lg title="Verify Identity" />
          <Row>
            <Col lg={3}>
              <Sidebar />
            </Col>
            <Col lg={9}>
              {!shouldDisplayForm ? (
                <VerificationStatusText auth={auth} />
              ) : (
                <form className="mt-0" onSubmit={submitHandler}>
                  <div className="form-group col-12 col-lg-6">
                    <label for="identity_card">
                      Please verify your identity
                    </label>
                    <Input
                      onInput={inputHandler}
                      type="file"
                      id="identity_card"
                      name="identity_card"
                      className="form-control"
                      placeholder="Identity Card"
                      useref={fileInput}
                      validators={[
                        VALIDATOR_REQUIRE("Identity card is required."),
                      ]}
                      accept="image/*"
                    />
                  </div>

                  <div className="form-group col-12 col-lg-6">
                    <Button
                      type="submit"
                      className="btn-primary w-100 mt-4"
                      text="Verify Now"
                    />
                  </div>
                </form>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};
export default AccountIdentityVerification;
