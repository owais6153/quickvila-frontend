import { AppContext } from "../shared/context/app-context";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import Sidebar from "../shared/components/sidebar";

const Account = () => {
  const { auth } = useContext(AppContext);

  return (
    <StaticPage>
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
