import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import Component404 from "../shared/components/component-404";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import { useParams } from "react-router-dom";
import Inner from "../components/store/inner";
import "./Store-inner.css";

const StoreInner = () => {
  const store_id = useParams().sid;
  const [featured_products, setFeaturedProducts] = useState();
  const [top_selling_products, setTopSellinggProducts] = useState();
  const [store, setStore] = useState(false);
  const [searching, setSearching] = useState(true);

  const { sendRequest } = useHttpClient();
  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl(`stores/${store_id}`));
        if (responseData.status == 200) {
          setFeaturedProducts(responseData.featured_products);
          setTopSellinggProducts(responseData.top_selling_products);
          setStore(responseData.store);
        }
      } catch (err) {
        setSearching(false);
      }
    };
    fetchData();
  };
  return (
    <StaticPage getData={getData}>
      {!searching && !store && <Component404 />}
      {store && <Inner store={store} />}
      {top_selling_products && top_selling_products.length > 0 && (
        <ProductSlider
          products={top_selling_products}
          title="Top Selling Products"
          url={`/stores/${store.id}/products`}
        />
      )}
      {featured_products && featured_products.length > 0 && (
        <ProductSlider
          products={featured_products}
          title="Featured Products"
          url={`/stores/${store.id}/products`}
        />
      )}
    </StaticPage>
  );
};
export default StoreInner;
