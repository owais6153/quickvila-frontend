import { useParams } from "react-router-dom";
import StaticPage from "../shared/components/staticpages";
import { Link } from "react-router-dom";

const OrderInner = () => {
  const order_id = useParams().order_id;

  return (
    <StaticPage>
      <div id="error-boundry">
        <div className="catch">
          <h1>Thanks for your order.</h1>
          <p>Your order is in progress.</p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </StaticPage>
  );
};
export default OrderInner;
