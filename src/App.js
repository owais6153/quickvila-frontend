import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoading } from "./shared/hooks/loader-hook";
import Header from "./shared/components/inc/header";
import Footer from "./shared/components/inc/footer";
import Loader from "./shared/components/loader";
import MainHome from "./pages/MainHome";
import "./App.css";

const Shop = lazy(() => import("./pages/Shop"));
const Search = lazy(() => import("./pages/Search"));
const Store = lazy(() => import("./pages/Store"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/404"));
const ProductInner = lazy(() => import("./pages/Product-inner"));
const StoreInner = lazy(() => import("./pages/Store-inner"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const StoreProducts = lazy(() => import("./pages/Store-products"));
const OrderInner = lazy(() => import("./pages/Order-inner"));
const CategoryStore = lazy(() => import("./pages/Category-store"));
const StoreCategories = lazy(() => import("./pages/Store-category"));
const PaymentSuccess = lazy(() => import("./pages/Payment-success"));
const PaymentCancel = lazy(() => import("./pages/Payment-cancel"));
const CategoryProducts = lazy(() => import("./pages/Categroy-products"));
const Account = lazy(() => import("./pages/Account"));
const AccountIdentityVerification = lazy(() =>
  import("./pages/Account-identity-verification")
);

const App = () => {
  const { isLoading } = useLoading(false);
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<MainHome />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/search/:term" exact element={<Search />} />
          <Route path="/products/" exact element={<Product />} />
          <Route path="/stores" exact element={<Store />} />
          <Route path="/stores/:sid" exact element={<StoreInner />} />
          <Route
            path="/stores/:sid/categories/:cid"
            exact
            element={<CategoryProducts />}
          />
          <Route
            path="/stores/:sid/products"
            exact
            element={<StoreProducts />}
          />
          <Route
            path="/stores/:sid/products/:pid"
            exact
            element={<ProductInner />}
          />
          <Route path="/categories/" exact element={<StoreCategories />} />
          <Route path="/categories/:cid" exact element={<CategoryStore />} />
          <Route path="/payment-suceess" exact element={<PaymentSuccess />} />
          <Route path="/payment-cancel" exact element={<PaymentCancel />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/checkout" exact element={<Checkout />} />

          {/* Need Auth */}
          <Route path="/my-account" exact element={<Account />} />
          <Route
            path="/my-account/verify-idnetity"
            exact
            element={<AccountIdentityVerification />}
          />
          <Route path="/my-account/orders" exact element={<h1>Orders</h1>} />
          <Route
            path="/my-account/orders/:order_id"
            exact
            element={<OrderInner />}
          />

          {/* This should be last route of the app */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
