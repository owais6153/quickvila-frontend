import StaticPage from "../shared/components/staticpages";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { apiUrl } from "../shared/helper";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useLocation } from "react-router-dom";
const PaymentCancel = () => {
  const { sendRequest } = useHttpClient();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentId = new URLSearchParams(location.search).get("paymentId");
        const responseData = await sendRequest(
          apiUrl(`paymentCancel?paymentId=${paymentId}`)
        );
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <StaticPage>
      <div id="error-boundry">
        <Helmet>
          <title>Payment Canceled - {process.env.REACT_APP_MY_APP}</title>
          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sit rhoncus non, ultricies enim eget adipiscing orci
    malesuada mauris. Orci tellus ut ornare varius sed massa
    quis vel."
          />
        </Helmet>
        <div className="catch">
          <h1>Opps! Payment Canceled.</h1>
          <p>Sorry for the trouble, Your payment has been canceled.</p>
        </div>
      </div>
    </StaticPage>
  );
};
export default PaymentCancel;
