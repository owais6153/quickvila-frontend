import Container from "react-bootstrap/esm/Container";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";

const PageNotFound = () => {
  const { isLoading, setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <Container>
        <h1>Page Not Found</h1>
      </Container>
    </StaticPage>
  );
};
export default PageNotFound;
