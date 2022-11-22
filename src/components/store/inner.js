import React from "react";
import HeadingRow from "../../shared/components/heading-row";
import RatingStars from "../reviews/rating-stars.js";
const Inner = ({ store, ratings }) => {
  return (
    <React.Fragment>
      <section
        className="inner-banner"
        style={{
          backgroundImage: `url('${store.cover}')`,
        }}
      ></section>
      <section className="in-sec-one-C">
        <div className="container">
          <div className="row out-row align-items-sm-baseline">
            <div className="col-md-3">
              <div className="brnd-logo">
                <img src={store.logo} alt={store.name} />
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <p>
                20k
                <br />
                <span>Followers</span>
              </p>
            </div>
            <div className="col-md-3 col-sm-4">
              <p>
                {store.products_count > 100 ? "100+" : store.products_count}
                <br /> <span>Product{store.products_count > 1 && "s"}</span>
              </p>
            </div>
            <div className="col-md-3 col-sm-4">
              <p>
                Ratings
                <br />
                <span>
                  <RatingStars ratings={ratings} />
                </span>
              </p>
            </div>
          </div>
          {store.description && (
            <div className="col-12 description">
              <HeadingRow title="Description" />
              <p>{store.description}</p>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Inner;
