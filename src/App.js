import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./shared/context/app-context";
import { LoadingProvider } from "./shared/context/loader-context";
import Header from "./shared/components/inc/header";
import Home from "./pages/home";
import Search from "./pages/search";
import PageNotFound from "./pages/404";
import ProductInner from "./pages/product-inner";
import Cart from "./pages/cart";
import "./App.css";

const App = () => {
  return (
    <LoadingProvider>
      <AppProvider>
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
      </AppProvider>
    </LoadingProvider>
  );
};

export default App;
