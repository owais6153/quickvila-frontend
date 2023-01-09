import { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { AppContext } from "../shared/context/app-context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Component404 from "../shared/components/component-404";
import StaticPage from "../shared/components/staticpages";
import ProductSlider from "../components/sections/product-slider";
import StoreSlider from "../components/sections/store-slider";
import StoreDetail from "../components/store/detail";
import ProductCategories from "../components/store/product-categories";
import ModalPopup from "../shared/components/modal";
import Button from "../shared/components/form-elements/button";

import "./Store-inner.css";

const StoreInner = () => {
  const { geolocation, hasGeoLocation, toggleLoginModal, isLogin, auth } =
    useContext(AppContext);
  const navigate = useNavigate();

  const store_id = useParams().sid;
  const [featured_products, setFeaturedProducts] = useState();
  const [top_selling_products, setTopSellinggProducts] = useState();
  const [store, setStore] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [nearby_stores, setNearbyStores] = useState();
  const [product_categories, setProductCategories] = useState();
  const [prescriptionModal, togglePrescriptionModal] = useState(false);

  const { isLoading, sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          apiUrl(
            `stores/${store_id}?lat=${geolocation.latitude}&long=${geolocation.longitude}`
          )
        );
        if (responseData.status == 200) {
          setStore(responseData.store);
          setFeaturedProducts(responseData.featured_products);
          setTopSellinggProducts(responseData.top_selling_products);
          setRatings(responseData.ratings);
          setProductCategories(responseData.product_categories);
          setNearbyStores(responseData.nearby_stores);

          if (store.type === "pharmacy") {
            togglePrescriptionModal(true);
          }
        }
      } catch (err) {}
    };
    if (hasGeoLocation) fetchData();
  }, [geolocation, hasGeoLocation, store_id]);

  const clickHandler = (flag) => {
    if (flag) {
      if (!isLogin) toggleLoginModal();
      else navigate("/my-account/verify-idnetity");
    } else {
      navigate("/shop");
    }
  };

  return (
    <StaticPage>
      {!isLoading && !store && <Component404 />}
      <div className="storedetail">
        {store && (
          <>
            <StoreDetail store={store} ratings={ratings} />
            {product_categories && product_categories.length > 0 && (
              <ProductCategories
                id={store.id}
                product_categories={product_categories}
              />
            )}
          </>
        )}
        {top_selling_products && top_selling_products.length > 0 && (
          <ProductSlider
            products={top_selling_products}
            title="Top Selling Products"
            url={`/stores/${store.id}/products`}
            urlTitle="See All Products"
          />
        )}
        {featured_products && featured_products.length > 0 && (
          <ProductSlider
            products={featured_products}
            title="Featured Products"
            url={`/stores/${store.id}/products`}
            urlTitle="See All Products"
          />
        )}
      </div>
      {nearby_stores && nearby_stores.length > 0 && (
        <StoreSlider
          title="Other nearby stores"
          url="/stores"
          urlTitle="See All Stores"
          stores={nearby_stores}
        />
      )}
      {(!isLogin || (isLogin && !auth.user.is_identity_card_verified)) &&
        store.type === "vape" && (
          <ModalPopup size="md" show={true}>
            <div
              className="col-10"
              style={{ margin: "auto", padding: "40px 0px" }}>
              <h3>Are you 18+?</h3>
              <p>Please confirm that you are 18+.</p>

              <Button
                type="button"
                onClick={() => {
                  clickHandler(true);
                }}
                className="btn-primary"
                text="Confirm"
              />
              <Button
                type="button"
                onClick={() => {
                  clickHandler(false);
                }}
                className="btn-primary mx-3"
                text="Cancel"
              />
            </div>
          </ModalPopup>
        )}
      {/* {!prescriptionModal && store.type === "pharmacy" && (
        <ModalPopup size="md"  show={true}>
          <div
            className="col-10"
            style={{ margin: "auto", padding: "40px 0px" }}
          >
            <h3>Have Prescription?</h3>
            <p>Request your prescription price.</p>

            <Button
              type="button"
              onClick={() => {
                clickHandler(true);
              }}
              className="btn-primary"
              text="I have"
            />
            <Button
              type="button"
              onClick={() => {
                clickHandler(false);
              }}
              className="btn-primary mx-3"
              text="See products"
            />
          </div>
        </ModalPopup>
      )} */}
    </StaticPage>
  );
};
export default StoreInner;
