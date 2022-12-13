import React from "react";
import { Helmet } from "react-helmet";
import RatingStars from "../reviews/rating-stars";
import { Currency } from "../../shared/helper";
import { Link } from "react-router-dom";
import Variations from "./variation";

const PrdouctDetail = ({ product, averageRating, onClickHandler, options }) => {
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
                <Variations options={options} variations={product.variations} />
              )}
              <ul>
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
    </React.Fragment>
  );
};
export default PrdouctDetail;
