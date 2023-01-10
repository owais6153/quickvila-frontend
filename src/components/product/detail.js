import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import RatingStars from "../reviews/rating-stars";
import { Currency } from "../../shared/helper";
import { Link } from "react-router-dom";
import Variations from "./variation";
import { toast } from "react-toastify";
import { AppContext } from "../../shared/context/app-context";
import ProductGallery from "./gallery";
import ModalPopup from "../../shared/components/modal";
import Button from "../../shared/components/form-elements/button";

const PrdouctDetail = ({ product, averageRating, options, std, pd }) => {
  const [addToCartFlag, setAddToCartFlag] = useState(true);
  const [price, setPrice] = useState(false);
  const [salePrice, setSalePrice] = useState(false);
  const [variationId, setVariationID] = useState(false);
  const [productName, setProductName] = useState(false);
  const [productImage, setProductImage] = useState(undefined);
  const [emptyCartWarning, toggleEmptyCartWarning] = useState(false);

  useEffect(() => {
    setProductImage(product.image);
    setPrice(product.price_to_display);
    setSalePrice(product.sale_price_to_display);
    setProductName(product.name);
    setAddToCartFlag(product.product_type === "simple");
  }, [pd]);

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
  const addToCartHandler = async () => {
    toggleEmptyCartWarning(false);
    const res = await addToCart(product, variationId);
    if (res.status == 200) {
      toast.success(`${product.name} added to Cart!`);
    }
  };
  const onCancel = () => {
    toggleEmptyCartWarning(false);
  };
  const onAddToCart = (e) => {
    try {
      if (product.store.type !== "pharmacy") {
        addToCartHandler();
      } else {
        toggleEmptyCartWarning(true);
      }
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {product.name} - Product | {process.env.REACT_APP_MY_APP}
        </title>
        <meta name="description" content={product.short_description} />
      </Helmet>
      <section className="product-inner-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-sm-5">
              <img src={productImage} alt={product.name} />
              {product.gallery.length > 0 && (
                <ProductGallery
                  gallery={product.gallery}
                  changeImage={setProductImage}
                  name={product.name}
                />
              )}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="store-detail">
                <Link to={`/stores/${product.store.id}`}>
                  <img src={product.store.logo} alt={product.store.name} />
                  <p>{product.store.name}</p>
                </Link>
              </div>
              <h2>{productName}</h2>
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
                {salePrice && (
                  <span>
                    <span>
                      <Currency />
                      {salePrice}
                    </span>
                    <del
                      style={{
                        marginLeft: "10px",
                        fontSize: "60%",
                        color: "#000",
                      }}>
                      <Currency />
                      {price}
                    </del>
                  </span>
                )}

                {!salePrice && (
                  <span>
                    <Currency />
                    {price}
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
              <button
                key={product.id}
                className="btn btn-primary"
                onClick={onAddToCart}
                disabled={!addToCartFlag}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {emptyCartWarning && (
        <ModalPopup size="lg" show={true}>
          <div
            className="col-10"
            style={{ margin: "auto", padding: "40px 0px" }}>
            <h3>All the items from other stores will be removed!</h3>
            <p>
              Its is required to remove other stores items from cart before
              adding pharmacy product.
            </p>
            <Button
              type="button"
              onClick={addToCartHandler}
              className="btn-primary"
              text="Continue"
            />
            <Button
              type="button"
              onClick={onCancel}
              className="btn-primary mx-3"
              text="Cancel"
            />
          </div>
        </ModalPopup>
      )}
    </React.Fragment>
  );
};
export default PrdouctDetail;
