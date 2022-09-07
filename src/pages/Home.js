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
  const [stores, setStores] = useState();

  const { sendRequest } = useHttpClient();

  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl("home"));
        setProducts(responseData.products);
        setStores(responseData.stores);
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <StaticPage getData={getData}>
      <Banner />
      {stores && (
        <StoreSlider title="All Stores" url="/stores" stores={stores} />
      )}
      {products && (
        <ProductSlider
          products={products}
          title="Top Selling Products"
          url="/products"
        />
      )}
      {products && (
        <ProductSlider
          products={products}
          title="Featured Products"
          url="/products"
        />
      )}
      <AdvBanners />
      <Testimonials />
      <Videos />
    </StaticPage>
  );
};
export default Home;
