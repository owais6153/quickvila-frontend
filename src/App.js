import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./shared/components/inc/header";
import Footer from "./shared/components/inc/footer";
import { useLoading } from "./shared/hooks/loader-hook";
import Home from "./pages/home";
import Search from "./pages/search";
import PageNotFound from "./pages/404";
import ProductInner from "./pages/product-inner";
import Cart from "./pages/cart";
import Loader from "./shared/components/loader";
import "./App.css";

const App = () => {
  const { isLoading } = useLoading(true);
  return (
      <React.Fragment>        
        {isLoading && <Loader />}
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search/:term" exact element={<Search />} />
          <Route path="/products" exact element={<h1>Product Page</h1>} />
          <Route path="/products/:pid" exact element={<ProductInner />} />
          <Route path="/store" exact element={<h1>Product Page</h1>} />
          <Route path="/store/:sid" exact element={<h1>Product Page</h1>} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/checkout" exact element={<h1>PageCart</h1>} />
          <Route path="/account" exact element={<h1>PageCart</h1>} />
          <Route path="/account/orders" exact element={<h1>PageCart</h1>} />
          <Route path="/account/whishlist" exact element={<h1>PageCart</h1>} />
          <Route path="/account/following" exact element={<h1>PageCart</h1>} />
          {/* This should be last route of the app */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
     </React.Fragment>
  );
};

export default App;
