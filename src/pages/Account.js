import { AppContext } from "../shared/context/app-context";
import { useContext } from "react";
import { useLoading } from "../shared/hooks/loader-hook";
import { Container, Row, Col } from "react-bootstrap";
import HeadingRow from "../shared/components/heading-row";
import StaticPage from "../shared/components/staticpages";
import Sidebar from "../shared/components/sidebar";

const Account = () => {
  const { auth } = useContext(AppContext);
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <section className="no-banner">
        <Container>
          <HeadingRow lg title="My Account" />
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <h4>Hello {auth.user.name}!</h4>
            </Col>
          </Row>
        </Container>
      </section>
    </StaticPage>
  );
};
export default Account;
