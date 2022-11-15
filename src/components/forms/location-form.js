import PlacesInput from "../../shared/components/form-elements/places-input";
import { homeUrl } from "../../shared/helper";
import { Row, Col } from "react-bootstrap";
import { AppContext } from "../../shared/context/app-context";
import { useContext } from "react";
import "./location-form.css";

const LocationForm = () => {
  const { getLocationByNavigator } = useContext(AppContext);

  return (
    <form className="baner-form">
      <Row>
        <Col xs={9} style={{ paddingRight: 0 }}>
          <div className="geo-loc">
            {/* <PlacesInput /> */}
            {"geolocation" in navigator && (
              <div className="ser-icon" onClick={getLocationByNavigator}>
                <img
                  src={homeUrl("images/Vectory (1).png")}
                  alt="Get Geolocation"
                />
              </div>
            )}
          </div>
        </Col>
        <Col xs={3}>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="btn btn-primary w-100"
            value="Search"
          />
        </Col>
      </Row>
    </form>
  );
};
export default LocationForm;
