import { useState, useContext } from "react";
import { AppContext } from "../shared/context/app-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import { apiUrl } from "../shared/helper";
import { useParams } from "react-router-dom";
import StaticPage from "../shared/components/staticpages";
import Component404 from "../shared/components/component-404";
import HeadingRow from "../shared/components/heading-row";

const OrderInner = () => {
  const order_id = useParams().order_id;

  return (
    <StaticPage>
      <div id="error-boundry">
        <div className="catch">
          <h1>Thanks for your order.</h1>
          <p>Your order is in progress.</p>
          <a href="/" className="btn btn-primary">
            Go to Home
          </a>
        </div>
      </div>
    </StaticPage>
  );
};
export default OrderInner;
