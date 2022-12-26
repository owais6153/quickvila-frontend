import { Col } from "react-bootstrap";
import { Currency } from "../../shared/helper";

const CartTotalTable = ({ cart, displayAll }) => {
  return (
    <>
      <Col xs={6}>Sub-Total:</Col>
      <Col xs={6}>
        <Currency />
        {cart.sub_total}
      </Col>
      {displayAll && (
        <>
          <Col xs={6}>Tax:</Col>
          <Col xs={6}>
            <Currency />
            {cart.tax}
          </Col>
          <Col xs={6}>Platform Charges:</Col>
          <Col xs={6}>
            <Currency />
            {cart.platform_charges}
          </Col>
          <Col xs={6}>Delivery Charges:</Col>
          <Col xs={6}>
            <Currency />
            {cart.delivery_charges}
          </Col>
          <Col xs={6} className="total">
            Total:
          </Col>
          <Col xs={6} className="total">
            <Currency />
            {cart.total}
          </Col>
        </>
      )}
    </>
  );
};
export default CartTotalTable;
