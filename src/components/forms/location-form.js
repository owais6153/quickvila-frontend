import PlacesInput from "../../shared/components/form-elements/places-input";
import { useNavigate } from "react-router-dom";
import { homeUrl } from "../../shared/helper";
import { Row, Col } from "react-bootstrap";
import { AppContext } from "../../shared/context/app-context";
import { useContext, useState, useEffect } from "react";
import "./location-form.css";

const LocationForm = () => {
  const { getLocationByNavigator, setGeolocation, geolocation } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (geolocation) setAddress(geolocation.address);
  }, [geolocation]);

  const setUserGeolocation = (value) => {
    setGeolocation(value);
    setAddress(value.address);
  };

  const requestBrowserLocation = () => {
    getLocationByNavigator(true, true);
  };

  return (
    <form className="baner-form">
      <Row>
        <Col xs={9} style={{ paddingRight: 0 }}>
          <div className="geo-loc">
            <PlacesInput
              setGeolocation={setUserGeolocation}
              address={address}
              setAddress={setAddress}
            />
            {"geolocation" in navigator && (
              <div
                className="ser-icon pointer"
                onClick={requestBrowserLocation}
              >
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
              navigate(`/stores`);
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
