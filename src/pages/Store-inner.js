import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import Component404 from "../components/component-404";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import { useParams } from "react-router-dom";
import Inner from "../components/store/inner";
import "./Store-inner.css";

const StoreInner = () => {
  const store_id = useParams().sid;
  const [products, setProducts] = useState();
  const [store, setStore] = useState(false);
  const [searching, setSearching] = useState(true);

  const { sendRequest } = useHttpClient();
  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(apiUrl(`stores/${store_id}`));
        if (responseData.status == 200) {
          setProducts(responseData.products);
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
      {products && products.length > 0 && (
        <ProductSlider
          products={products}
          title="Top Selling Products"
          url={`/stores/${store.id}/products`}
        />
      )}
      {products && products.length > 0 && (
        <ProductSlider
          products={products}
          title="Featured Products"
          url={`/stores/${store.id}/products`}
        />
      )}
    </StaticPage>
  );
};
export default StoreInner;
