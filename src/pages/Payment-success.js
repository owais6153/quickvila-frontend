import StaticPage from "../shared/components/staticpages";
import { useLoading } from "../shared/hooks/loader-hook";
import { Helmet } from "react-helmet";
const PaymentSuccess = () => {
    const { setIsLoading } = useLoading(true);
    const onPageLoad = (value) => {
      setIsLoading(value);
    };
    return (
        <StaticPage onPageLoad={onPageLoad}>
          <div id="error-boundry">
            <Helmet>
              <title>Thank you - QuiclVila</title>
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
}
export default PaymentSuccess;