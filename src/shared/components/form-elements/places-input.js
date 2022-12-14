import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Icon from "../font-awesome-icon";

class PlacesInput extends React.Component {
  handleChange = (address) => {
    this.props.setAddress(address);
  };

  handleSelect = (address) => {
    this.props.setAddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.props.setGeolocation({
          latitude: latLng.lat,
          longitude: latLng.lng,
          address: address,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address}
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
              value={this.props.address}
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
              {suggestions.map((suggestion, index) => {
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
                    key={index}
                  >
                    <span>
                      <Icon icon="fa fa-map-marker" aria-hidden="true"></Icon>
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
