import { useState } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { useParams } from "react-router-dom";
import { AppContext } from "../shared/context/app-context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useCart } from "../shared/hooks/cart-hook";
import { Currency } from "../shared/helper";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import Component404 from "../shared/components/component-404";
import Reviews from "../components/reviews/reviews";
import RatingStars from "../components/reviews/rating-stars";
import { Helmet } from "react-helmet";

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
  const { isLogin } = useContext(AppContext);
  const { cart, addToCart, emptyCart } = useCart();

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
          <Helmet>
            <title>{product.name} - Product | QuiclVila</title>
            <meta name="description" content={product.short_description} />
          </Helmet>
          <section className="product-inner-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-sm-5">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="col-lg-8 col-md-12">
                  <h2>{product.name}</h2>
                  <p>{product.short_description}</p>
                  <div className="rating">
                    <ul>
                      <li>
                        <RatingStars ratings={averageRating} />
                      </li>
                      <li>
                        <p>{product.reviews_count} Ratings</p>
                      </li>
                      <li>
                        <p>{averageRating} average</p>
                      </li>
                    </ul>
                  </div>
                  <h2 className="c-two">
                    {product.sale_price && (
                      <span>
                        <span>
                          <Currency />
                          {product.sale_price}
                        </span>
                        <del
                          style={{
                            marginLeft: "10px",
                            fontSize: "60%",
                            color: "#000",
                          }}
                        >
                          <Currency />
                          {product.price}
                        </del>
                      </span>
                    )}

                    {!product.sale_price && (
                      <span>
                        <Currency />
                        {product.price}
                      </span>
                    )}
                  </h2>
                  <h3>Description:</h3>
                  <p>{product.description}</p>
                  {product.variations && product.variations.length > 0 && (
                    <div id="variations" className="mb-3">
                      {product.variations.map((variation) => {
                        return (
                          <div key={variation.id}>
                            <label className="d-block">{variation.name}</label>
                            {variation.type == "size" &&
                              variation.options.map((option) => {
                                return (
                                  <label className="size">
                                    {option.value}
                                    <span
                                      style={{ background: option.media }}
                                    ></span>
                                    <input type="radio" name="size" />
                                  </label>
                                );
                              })}
                            {variation.type == "color" &&
                              variation.options.map((option) => {
                                return (
                                  <label className="color">
                                    {option.value}
                                    <span
                                      style={{ background: option.media }}
                                    ></span>
                                    <input type="radio" name="color" />
                                  </label>
                                );
                              })}

                            {variation.type == "custom" && (
                              <select
                                name={`variation_id${variation.id}`}
                                className="form-control"
                              >
                                {variation.options.map((option) => {
                                  return (
                                    <option
                                      key={`${variation.id}${option.id}`}
                                      value={option.id}
                                    >
                                      {option.value}
                                    </option>
                                  );
                                })}
                              </select>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <ul>
                    <li>
                      <button type="button" className="btn btn-primary">
                        buy now
                      </button>
                    </li>
                    <li>
                      <button
                        key={product.id}
                        className="btn btn-primary"
                        onClick={onClickHandler}
                      >
                        Add To Cart
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
