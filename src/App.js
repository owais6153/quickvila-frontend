import React from "react";
// import Header from './shared/components/header';
import LoginForm from "./auth/login";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <section className="hero_slider">
        <LoginForm />
      </section>
    </React.Fragment>
  );
};

export default App;
