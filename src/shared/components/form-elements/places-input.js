import React, { useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

class PlacesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.props.setGeolocation(() => ({
          latitude: latLng.lat,
          longitude: latLng.lng,
        }));
        console.log("Success", latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={
          this.state.address != "" ? this.state.address : this.props.address
        }
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="get-address">
            <input
              {...getInputProps({
                placeholder: "Enter your full address",
                className: "form-control",
              })}
              value={
                this.state.address != ""
                  ? this.state.address
                  : this.props.address
              }
            />
            <div className="autocomplete-dropdown-container">
              {loading && (
                <div
                  style={{
                    background: "#fff",
                    padding: "10px 20px",
                  }}
                >
                  Loading...
                </div>
              )}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#f3f3f3", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default PlacesInput;
