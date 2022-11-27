import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import Component404 from "../shared/components/component-404";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <Helmet>
        <title>404 - Page Not Found | QuiclVila</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <Component404 />
    </StaticPage>
  );
};
export default PageNotFound;
