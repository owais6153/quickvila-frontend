import React from "react";
import { useParams, Route, Routes } from "react-router-dom";
import { useLoading } from "./shared/hooks/loader-hook";
import Header from "./shared/components/inc/header";
import Footer from "./shared/components/inc/footer";
import Loader from "./shared/components/loader";
import Shop from "./pages/Shop";
import MainHome from "./pages/MainHome";
import Search from "./pages/Search";
import Store from "./pages/Store";
import Product from "./pages/Product";
import PageNotFound from "./pages/404";
import ProductInner from "./pages/Product-inner";
import StoreInner from "./pages/Store-inner";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import StoreProducts from "./pages/Store-products";
import Account from "./pages/Account";
import OrderInner from "./pages/OrderInner";
import CategoryStore from "./pages/Category-store";
import StoreCategories from "./pages/Store-category";
import "./App.css";

const DynamicProductLink = (props) => {
  const product_id = useParams().pid;
  return <ProductInner {...props} key={product_id} />;
};
const DynamicStoreLink = (props) => {
  const store_id = useParams().sid;
  return <StoreInner {...props} key={store_id} />;
};

const App = () => {
  const { isLoading } = useLoading(true);
  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header />
      <Routes>
        <Route path="/" exact element={<MainHome />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/search/:term" exact element={<Search />} />
        <Route path="/products/" exact element={<Product />} />
        <Route path="/stores" exact element={<Store />} />
        <Route path="/stores/:sid" exact element={<DynamicStoreLink />} />
        <Route path="/stores/:sid/products" exact element={<StoreProducts />} />
        <Route
          path="/stores/:sid/products/:pid"
          exact
          element={<DynamicProductLink />}
        />
        <Route path="/categories/" exact element={<StoreCategories />} />
        <Route path="/categories/:cid" exact element={<CategoryStore />} />

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
    </React.Fragment>
  );
};

export default App;
