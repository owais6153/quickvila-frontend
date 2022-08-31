import React from "react";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import { homeUrl } from "../shared/helper";
const ProductInner = () => {
  const { isLoading, setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
  return (
    <StaticPage onPageLoad={onPageLoad}>
      <section
        className="inner-banner"
        style={{
          backgroundImage: `url('${homeUrl("images/Rectangle 340 (1).png")}')`,
        }}
      ></section>
      <section className="in-sec-one-C">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="brnd-logo">
                <img src={homeUrl("images/Group 39733.png")} />
              </div>
            </div>
            <div className="col-md-3">
              <p>
                20k
                <br />
                <span>Followers</span>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                100+
                <br />
                <span>Products</span>
              </p>
            </div>
            <div className="col-md-3">
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </StaticPage>
  );
};
export default ProductInner;
