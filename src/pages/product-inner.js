import React from "react";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
const ProductInner = () => {
  const { isLoading, setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <h1>Product Inner</h1>
    </StaticPage>
  );
};
export default ProductInner;
