import { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { useParams } from "react-router-dom";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import Component404 from "../shared/components/component-404";
import Reviews from "../components/reviews/reviews";
import PrdouctDetail from "../components/product/detail";
import { AppContext } from "../shared/context/app-context";

import "./Product-inner.css";

const ProductInner = () => {
  const store_id = useParams().sid;
  const product_id = useParams().pid;

  const [products, setProducts] = useState();
  const [product, setProduct] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [averageRating, setAverageRating] = useState(false);
  const [options, setOptions] = useState(false);

  const { isLoading, sendRequest } = useHttpClient();
  const { geolocation, hasGeoLocation } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(false);
        const responseData = await sendRequest(
          apiUrl(
            `stores/${store_id}/products/${product_id}?lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        if (responseData.status == 200) {
          setProduct(responseData.product);
          setProducts(responseData.related);
          setReviews(responseData.reviews);
          setAverageRating(responseData.average_rating);
          setOptions(responseData.product_options);
        }
      } catch (err) {}
    };
    fetchData();
    if (hasGeoLocation) fetchData();
  }, [store_id, product_id, geolocation, hasGeoLocation]);
  return (
    <StaticPage>
      {!isLoading && !product && <Component404 />}
      {product && (
        <div>
          <PrdouctDetail
            product={product}
            averageRating={averageRating}
            options={options}
            std={store_id}
            pd={product.id}
          />
          {reviews && reviews.data.length > 0 && (
            <Reviews
              reviews={reviews}
              updateReviews={setReviews}
              store_id={product.store_id}
              product_id={product.id}
            />
          )}
          {products && products.length > 0 && (
            <ProductSlider products={products} title="Related products" />
          )}
        </div>
      )}
    </StaticPage>
  );
};
export default ProductInner;
