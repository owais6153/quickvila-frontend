import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import RatingStars from "../reviews/rating-stars";
import { Currency } from "../../shared/helper";

const PrdouctDetail = ({ product, averageRating, onClickHandler }) => {
  const [options, setOptions] = useState(false);

  useEffect(() => {
    let option = [];
    if (product.variations && product.variations.length > 0) {
      product.variations.map((variation, index) => {
        for (const key in variation.variants) {
          let flag = true;
          if (!option[key]) option[key] = [];

          for (const o in option[key]) {
            if (option[key][o].name == variation.variants[key].name) {
              flag = false;
            }
          }

          if (flag) {
            let op = {
              name: variation.variants[key].name,
              media: variation.variants[key].media,
            };
            option[key].push(op);
          }
        }
      });
    }
    setOptions(option);
  }, []);

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
              {options && (
                <div id="variations" className="mb-3">
                  {options.map((option, index) => {
                    return (
                      <div>
                        <label className="d-block">asd</label>
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
    </React.Fragment>
  );
};
export default PrdouctDetail;
