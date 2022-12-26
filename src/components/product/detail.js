import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import RatingStars from "../reviews/rating-stars";
import { Currency } from "../../shared/helper";
import { Link } from "react-router-dom";
import Variations from "./variation";
import { toast } from "react-toastify";
import { AppContext } from "../../shared/context/app-context";

const PrdouctDetail = ({ product, averageRating, options, std, pd }) => {
  const [addToCartFlag, setAddToCartFlag] = useState(true);
  const [price, setPrice] = useState(false);
  const [salePrice, setSalePrice] = useState(false);
  const [variationId, setVariationID] = useState(false);
  const [productName, setProductName] = useState(false);
  const { addToCart } = useContext(AppContext);

  const updateDetail = (
    flag,
    price = product.price_to_display,
    sale_price = product.sale_price_to_display,
    id = false,
    pName = product.name
  ) => {
    setAddToCartFlag(flag);
    setPrice(price);
    setSalePrice(sale_price);
    setVariationID(id);
    setProductName(pName);
  };

  const onClickHandler = async (e) => {
    try {
      const res = await addToCart(product, variationId);
      if (res.status == 200) {
        toast.success(`${product.name} added to Cart!`);
      }
    } catch (err) {}
  };

  return (
    <React.Fragment>
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
              <div className="store-detail">
                <Link to={`/stores/${product.store.id}`}>
                  <img src={product.store.logo} alt={product.store.name} />
                  <p>{product.store.name}</p>
                </Link>
              </div>
              <h2>{productName !== false ? productName : product.name}</h2>
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
                {(salePrice || product.sale_price_to_display) && (
                  <span>
                    <span>
                      <Currency />
                      {salePrice || product.sale_price_to_display}
                    </span>
                    <del
                      style={{
                        marginLeft: "10px",
                        fontSize: "60%",
                        color: "#000",
                      }}
                    >
                      <Currency />
                      {price || product.price_to_display}
                    </del>
                  </span>
                )}

                {!salePrice && !product.sale_price_to_display && (
                  <span>
                    <Currency />
                    {price || product.price_to_display}
                  </span>
                )}
              </h2>
              {product.description && (
                <>
                  <h3>Description:</h3>
                  <p>{product.description}</p>
                </>
              )}
              {product.variations &&
                product.variations.length > 0 &&
                product.product_type == "variation" && (
                  <Variations
                    options={options}
                    variations={product.variations}
                    updateDetail={updateDetail}
                  />
                )}
              <ul>
                <li>
                  <button
                    key={product.id}
                    className="btn btn-primary"
                    onClick={onClickHandler}
                    disabled={!addToCartFlag}
                  >
                    Add To Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default PrdouctDetail;
