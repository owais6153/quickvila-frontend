import StaticPage from "../shared/components/staticpages";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { apiUrl } from "../shared/helper";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const { sendRequest } = useHttpClient();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentId = new URLSearchParams(location.search).get("paymentId");
        const responseData = await sendRequest(
          apiUrl(`paymentSuccess?paymentId=${paymentId}`)
        );
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <StaticPage>
      <div id="error-boundry">
        <Helmet>
          <title>Order Confirmed - QuiclVila</title>
          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sit rhoncus non, ultricies enim eget adipiscing orci
      malesuada mauris. Orci tellus ut ornare varius sed massa
      quis vel."
          />
        </Helmet>
        <div className="catch">
          <h1>05.00</h1>
          <p>Please wait 5mins for your order confirmation.</p>
        </div>
      </div>
    </StaticPage>
  );
};
export default PaymentSuccess;
