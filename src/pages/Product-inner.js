import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../shared/hooks/cart-hook";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import Component404 from "../shared/components/component-404";
import Reviews from "../components/reviews/reviews";
import PrdouctDetail from "../components/product/detail";

import "./Product-inner.css";

const ProductInner = () => {
  const store_id = useParams().sid;
  const product_id = useParams().pid;

  const [products, setProducts] = useState();
  const [product, setProduct] = useState(false);
  const [searching, setSearching] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [averageRating, setAverageRating] = useState(false);

  const { sendRequest } = useHttpClient();
  const { addToCart } = useCart();

  const onClickHandler = async (e) => {
    try {
      const res = await addToCart(product);
      if (res.status == 200) {
        toast.success(`${product.name} added to Cart!`);
      }
    } catch (err) {}
  };

  const getData = () => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          apiUrl(`stores/${store_id}/products/${product_id}`)
        );
        if (responseData.status == 200) {
          setProduct(responseData.product);
          setProducts(responseData.related);
          setReviews(responseData.reviews);
          setAverageRating(responseData.average_rating);
        }
      } catch (err) {
        setSearching(false);
      }
    };
    fetchData();
  };
  return (
    <StaticPage getData={getData}>
      {!searching && !product && <Component404 />}
      {product && (
        <div>
          <PrdouctDetail
            onClickHandler={onClickHandler}
            product={product}
            averageRating={averageRating}
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
            <ProductSlider
              products={products}
              title="Related products "
              url="/products"
            />
          )}
        </div>
      )}
    </StaticPage>
  );
};
export default ProductInner;
