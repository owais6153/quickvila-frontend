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
import CategorySlider from "../components/sections/category-slider";
import { Helmet } from "react-helmet";

const Home = () => {
  const { geolocation, hasGeoLocation } = useContext(AppContext);
  const [featured_products, setFeaturedProducts] = useState();
  const [top_selling_products, setTopSellinggProducts] = useState();
  const [stores, setStores] = useState();
  const [testimonials, setTestimonials] = useState();
  const [videos, setVideos] = useState();
  const [categories, setCategories] = useState();

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
          setCategories(responseData.store_categories);
        }
      } catch (err) {}
    };
    fetchData();
  }, [hasGeoLocation]);

  return (
    <StaticPage>
      <Helmet>
        <title>Shop | QuiclVila</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sit rhoncus non, ultricies enim eget adipiscing orci
malesuada mauris. Orci tellus ut ornare varius sed massa
quis vel."
        />
      </Helmet>
      <Banner />
      {categories && categories.length > 0 && (
        <CategorySlider
          categories={categories}
          title="Categories"
          url="/categories"
        />
      )}
      {stores && stores.length > 0 && (
        <StoreSlider title="Stores near you" url="/stores" stores={stores} />
      )}
      {stores && stores.length > 0 && (
        <StoreSlider
          title="Stores you have purchased from"
          url="/stores"
          stores={stores}
        />
      )}
      {stores && stores.length > 0 && (
        <StoreSlider title="Featured Stores" url="/stores" stores={stores} />
      )}
      {featured_products && featured_products.length > 0 && (
        <ProductSlider
          products={featured_products}
          title="Featured Products"
          url="/products"
        />
      )}
      {top_selling_products && top_selling_products.length > 0 && (
        <ProductSlider
          products={top_selling_products}
          title="Top Selling Products"
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
