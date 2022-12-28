import StaticPage from "../shared/components/staticpages";
import { Helmet } from "react-helmet";
const PaymentCancel = () => {
  return (
    <StaticPage>
      <div id="error-boundry">
        <Helmet>
          <title>Payment Canceled - QuiclVila</title>
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
