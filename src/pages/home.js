import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import Banner from "../components/sections/banner";
import StoreSlider from "../components/sections/store-slider";
import ProductSlider from "../components/sections/product-slider";
import AdvBanners from "../components/sections/advbanners";
import Testimonials from "../components/sections/testimonials";
import Videos from "../components/sections/videos";
const Home = () => {
  const [products, setProducts] = useState();
  const { sendRequest } = useHttpClient();

  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("products"));
        setProducts(responseData.products);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage getData={getData}>
      <Banner />
      <StoreSlider />
      {products && (
        <ProductSlider products={products} title="Top Selling Products" />
      )}
      {products && (
        <ProductSlider products={products} title="Featured Products" />
      )}
      <AdvBanners />
      <Testimonials />
      <Videos />
    </StaticPage>
  );
};
export default Home;
