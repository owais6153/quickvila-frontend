import { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import Component404 from "../shared/components/component-404";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import { useParams } from "react-router-dom";
import StoreDetail from "../components/store/detail";
import { AppContext } from "../shared/context/app-context";
import "./Store-inner.css";

const StoreInner = () => {
  const { geolocation, hasGeoLocation } = useContext(AppContext);

  const store_id = useParams().sid;
  const [featured_products, setFeaturedProducts] = useState();
  const [top_selling_products, setTopSellinggProducts] = useState();
  const [store, setStore] = useState(false);
  const [ratings, setRatings] = useState(0);

  const { isLoading, sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl(`stores/${store_id}`));
        if (responseData.status == 200) {
          setFeaturedProducts(responseData.featured_products);
          setTopSellinggProducts(responseData.top_selling_products);
          setStore(responseData.store);
          setRatings(responseData.ratings);
        }
      } catch (err) {}
    };
    if (hasGeoLocation) fetchData();
  }, [geolocation, hasGeoLocation]);
  return (
    <StaticPage>
      {!isLoading && !store && <Component404 />}
      {store && <StoreDetail store={store} ratings={ratings} />}
      {top_selling_products && top_selling_products.length > 0 && (
        <ProductSlider
          products={top_selling_products}
          title="Top Selling Products"
          url={`/stores/${store.id}/products`}
          urlTitle="See All Products"
        />
      )}
      {featured_products && featured_products.length > 0 && (
        <ProductSlider
          products={featured_products}
          title="Featured Products"
          url={`/stores/${store.id}/products`}
          urlTitle="See All Products"
        />
      )}
    </StaticPage>
  );
};
export default StoreInner;
