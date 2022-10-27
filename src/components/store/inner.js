import React from "react";
const Inner = ({ store }) => {
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
          <div className="row">
            <div className="col-md-3">
              <div className="brnd-logo">
                <img src={store.logo} alt={store.name} />
              </div>
            </div>
            <div className="col-md-3">
              <p>
                20k
                <br />
                <span>Followers</span>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                {store.products_count > 100 ? "100+" : store.products_count}
                <br /> <span>Product{store.products_count > 1 && "s"}</span>
              </p>
            </div>
            <div className="col-md-3">
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Inner;
