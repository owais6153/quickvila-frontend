import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import ProductSlider from "../components/sections/product-slider";
import { homeUrl } from "../shared/helper";
import "./Store-inner.css";


const StoreInner = () => {
    const [products, setProducts] = useState();
  const [stores, setStores] = useState();
  const [testimonials, setTestimonials] = useState();
  const [videos, setVideos] = useState();

  const { sendRequest } = useHttpClient();
  const { setIsLoading } = useLoading(true);
  const onPageLoad = (value) => {
    setIsLoading(value);
  };
    const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("home"));
        if (responseData.status == 200) {
          setProducts(responseData.products);
          setStores(responseData.stores);
          setTestimonials(responseData.testimonials);
          setVideos(responseData.videos);
        }
      } catch (err) {}
    };
    fetchData();
  };
  return (
    <StaticPage onPageLoad={onPageLoad} getData={getData}>
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

            {products  && products.length > 0  && (
        <ProductSlider
          products={products}
          title="Top Selling Products"
          url="/products"
        />
      )}
      {products  && products.length > 0  &&  (
        <ProductSlider
          products={products}
          title="Featured Products"
          url="/products"
        />
      )}
    </StaticPage>
  );
};
export default StoreInner;
