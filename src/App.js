import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoading } from "./shared/hooks/loader-hook";
import Header from "./shared/components/inc/header";
import Footer from "./shared/components/inc/footer";
import Loader from "./shared/components/loader";
import "./App.css";

const Shop = lazy(() => import("./pages/Shop"));
const MainHome = lazy(() => import("./pages/MainHome"));
const Search = lazy(() => import("./pages/Search"));
const Store = lazy(() => import("./pages/Store"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/404"));
const ProductInner = lazy(() => import("./pages/Product-inner"));
const StoreInner = lazy(() => import("./pages/Store-inner"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const StoreProducts = lazy(() => import("./pages/Store-products"));
const Account = lazy(() => import("./pages/Account"));
const OrderInner = lazy(() => import("./pages/OrderInner"));
const CategoryStore = lazy(() => import("./pages/Category-store"));
const StoreCategories = lazy(() => import("./pages/Store-category"));
const PaymentSuccess = lazy(() => import("./pages/Payment-success"));
const PaymentCancel = lazy(() => import("./pages/Payment-cancel"));

const App = () => {
  const { isLoading } = useLoading(false);
  return (
    <Suspense fallback={<Loader />}>
      {isLoading && <Loader />}
      <Header />
      <Routes>
        <Route path="/" exact element={<MainHome />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/search/:term" exact element={<Search />} />
        <Route path="/products/" exact element={<Product />} />
        <Route path="/stores" exact element={<Store />} />
        <Route path="/stores/:sid" exact element={<StoreInner />} />
        <Route path="/stores/:sid/products" exact element={<StoreProducts />} />
        <Route
          path="/stores/:sid/products/:pid"
          exact
          element={<ProductInner />}
        />
        <Route path="/categories/" exact element={<StoreCategories />} />
        <Route path="/categories/:cid" exact element={<CategoryStore />} />
        <Route path="/payment-suceess" exact element={<PaymentSuccess />} />
        <Route path="/payment-cancel" exact element={<PaymentCancel />} />

        {/* Need Auth */}
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/order/:order_id" exact element={<OrderInner />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/my-account" exact element={<Account />} />
        <Route path="/my-account/orders" exact element={<h1>Orders</h1>} />
        <Route
          path="/my-account/following"
          exact
          element={<h1>Following</h1>}
        />

        {/* This should be last route of the app */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
