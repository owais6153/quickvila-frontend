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

const Shop = () => {
  const { geolocation, hasGeoLocation } = useContext(AppContext);
  const [featured_products, setFeaturedProducts] = useState();
  const [featured_stores, setFeaturedStores] = useState();
  const [stores_purchased_from, setStores] = useState();
  const [nearby_stores, setNearbyStores] = useState();
  const [testimonials, setTestimonials] = useState();
  const [videos, setVideos] = useState();
  const [categories, setCategories] = useState();
  const [banners, setBanners] = useState();

  const { sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        var url;

        if (hasGeoLocation)
          url = `home?lat=${geolocation.latitude}&long=${geolocation.longitude}`;
        else url = `home`;

        const responseData = await sendRequest(apiUrl(url));
        if (responseData.status == 200) {
          setFeaturedProducts(responseData.featured_products);
          setFeaturedStores(responseData.featured_stores);
          setStores(responseData.stores_purchased_from);
          setNearbyStores(responseData.nearby_stores);
          setTestimonials(responseData.testimonials);
          setVideos(responseData.videos);
          setCategories(responseData.store_categories);
          setBanners(responseData.banners);
        }
      } catch (err) {}
    };
    fetchData();
  }, [geolocation, hasGeoLocation]);

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
      {nearby_stores && nearby_stores.length > 0 && (
        <StoreSlider
          title="Stores near you"
          url="/stores"
          stores={nearby_stores}
        />
      )}
      {stores_purchased_from && stores_purchased_from.length > 0 && (
        <StoreSlider
          title="Stores you have purchased from"
          url="/stores"
          stores={stores_purchased_from}
        />
      )}
      {featured_stores && featured_stores.length > 0 && (
        <StoreSlider
          title="Featured Stores"
          url="/stores"
          stores={featured_stores}
        />
      )}
      {featured_products && featured_products.length > 0 && (
        <ProductSlider
          products={featured_products}
          title="Featured Products"
          url="/products"
        />
      )}

      {banners && banners.length > 0 && <AdvBanners banners={banners} />}
      {testimonials && testimonials.length > 0 && (
        <Testimonials testimonials={testimonials} />
      )}
      {videos && videos.length > 0 && <Videos videos={videos} />}
    </StaticPage>
  );
};
export default Shop;
