import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import Component404 from "../components/component-404";

const PageNotFound = () => {
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <Component404 />
    </StaticPage>
  );
};
export default PageNotFound;
