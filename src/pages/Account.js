import { AppContext } from "../shared/context/app-context";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import Sidebar from "../shared/components/sidebar";

const Account = () => {
  const { auth, isLogin } = useContext(AppContext);

  return (
    <StaticPage isLogin={isLogin} authRequired={true}>
      <Helmet>
        <title>My Account | {process.env.REACT_APP_MY_APP}</title>
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
          <HeadingRow lg title="My Account" />
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <h2>Hello {auth.user.name}!</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};
export default Account;
