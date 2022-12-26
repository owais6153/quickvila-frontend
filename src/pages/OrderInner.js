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
  const [order, setOrder] = useState();
  const [searching, setSearching] = useState(true);

  const { sendRequest } = useHttpClient();
  const { auth, isLogin } = useContext(AppContext);

  // const getData = () => {
  //   const fetchData = async () => {
  //     console.log(auth);
  //     try {
  //       const responseData = await sendRequest(
  //         apiUrl(`orders/${order_id}`),
  //         "GET",
  //         null,
  //         {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${auth._token}`,
  //         }
  //       );
  //       if (responseData.status == 200) {
  //         setOrder(responseData.order);
  //       }
  //       console.log("working");
  //       setSearching(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // };

  return (
    <StaticPage>
      {/* {(!searching && !order) || (!isLogin && <Component404 />)} */}

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
