import { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { AppContext } from "../shared/context/app-context";
import StaticPage from "../shared/components/staticpages";
import Banner from "../components/sections/banner";
import StoreSlider from "../components/sections/store-slider";
import ProductSlider from "../components/sections/product-slider";
import AdvBanners from "../components/sections/advbanners";
import Testimonials from "../components/sections/testimonial-slider";
import Videos from "../components/sections/videos";

const Home = () => {
  const { geolocation, hasGeoLocation } = useContext(AppContext);
  const [featured_products, setFeaturedProducts] = useState();
  const [top_selling_products, setTopSellinggProducts] = useState();
  const [stores, setStores] = useState();
  const [testimonials, setTestimonials] = useState();
  const [videos, setVideos] = useState();

  const { sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        var url;

        if (hasGeoLocation)
          url = `home?lat=${geolocation.latitude}&long=${geolocation.longitude}`;
        else url = `home`;

        console.log(url);
        const responseData = await sendRequest(apiUrl("home"));
        if (responseData.status == 200) {
          setFeaturedProducts(responseData.featured_products);
          setTopSellinggProducts(responseData.top_selling_products);
          setStores(responseData.stores);
          setTestimonials(responseData.testimonials);
          setVideos(responseData.videos);
        }
      } catch (err) {}
    };
    fetchData();
  }, [hasGeoLocation]);

  return (
    <StaticPage>
      <Banner />
      {stores && stores.length > 0 && (
        <StoreSlider title="All Stores" url="/stores" stores={stores} />
      )}
      {top_selling_products && top_selling_products.length > 0 && (
        <ProductSlider
          products={top_selling_products}
          title="Top Selling Products"
          url="/products"
        />
      )}
      {featured_products && featured_products.length > 0 && (
        <ProductSlider
          products={featured_products}
          title="Featured Products"
          url="/products"
        />
      )}
      <AdvBanners />
      {testimonials && testimonials.length > 0 && (
        <Testimonials testimonials={testimonials} />
      )}
      {videos && videos.length > 0 && <Videos videos={videos} />}
    </StaticPage>
  );
};
export default Home;
