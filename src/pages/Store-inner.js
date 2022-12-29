import { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { AppContext } from "../shared/context/app-context";
import { useParams } from "react-router-dom";
import Component404 from "../shared/components/component-404";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import StoreSlider from "../components/sections/store-slider";
import StoreDetail from "../components/store/detail";
import ProductCategories from "../components/store/product-categories";

import "./Store-inner.css";

const StoreInner = () => {
  const { geolocation, hasGeoLocation } = useContext(AppContext);

  const store_id = useParams().sid;
  const [featured_products, setFeaturedProducts] = useState();
  const [top_selling_products, setTopSellinggProducts] = useState();
  const [store, setStore] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [nearby_stores, setNearbyStores] = useState();
  const [product_categories, setProductCategories] = useState();

  const { isLoading, sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          apiUrl(
            `stores/${store_id}?lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        if (responseData.status == 200) {
          setFeaturedProducts(responseData.featured_products);
          setTopSellinggProducts(responseData.top_selling_products);
          setStore(responseData.store);
          setRatings(responseData.ratings);
          setProductCategories(responseData.product_categories);
          setNearbyStores(responseData.nearby_stores);
        }
      } catch (err) {}
    };
    if (hasGeoLocation) fetchData();
  }, [geolocation, hasGeoLocation]);
  return (
    <StaticPage>
      {!isLoading && !store && <Component404 />}
      <div className="storedetail">
        {store && (
          <>
            <StoreDetail store={store} ratings={ratings} />
            <ProductCategories
              id={store.id}
              product_categories={product_categories}
            />
          </>
        )}
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
      </div>
      {nearby_stores && nearby_stores.length > 0 && (
        <StoreSlider
          title="Other nearby stores"
          url="/stores"
          urlTitle="See All Stores"
          stores={nearby_stores}
        />
      )}
    </StaticPage>
  );
};
export default StoreInner;
