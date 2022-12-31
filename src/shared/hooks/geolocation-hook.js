import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
function getAddress(results) {
  let res = "";
  if (results && results.length) {
    res = results[0].formatted_address;
    for (var i = 0; i < results.length; i++) {
      if (results[i].types.indexOf("neighborhood") != -1) {
        res = results[i].formatted_address;
      }
    }
  }
  return res;
}
export function useGeoLoacation() {
  const [geolocation, setGeolocation] = useState();
  const getLocationByNavigator = useCallback(
    (displayError = true, isRequestedByUser = false) => {
      if (!geolocation || isRequestedByUser) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const fetchAddress = async function (position) {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_API}`
              );
              const address = await response.json();
              setGeolocation(() => ({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                address: getAddress(address.results),
              }));
            };
            fetchAddress(position);
          },
          function (error) {
            if (displayError)
              toast.error(
                `${error.message}, Please reset your location permission`
              );
            else
              console.error(
                `${error.message}, Please reset your location permission`
              );
          }
        );
      }
    },
    []
  );
  useEffect(() => {
    var hasLocation = geolocation ? true : false;
    if (hasLocation) {
      sessionStorage.setItem("geolocation", JSON.stringify(geolocation));
    }
  }, [geolocation]);

  useEffect(() => {
    const storedLocation = JSON.parse(sessionStorage.getItem("geolocation"));
    if (
      storedLocation &&
      storedLocation.latitude &&
      storedLocation.longitude &&
      storedLocation.address
    ) {
      setGeolocation({
        latitude: storedLocation.latitude,
        longitude: storedLocation.longitude,
        address: storedLocation.address,
      });
    } else {
      getLocationByNavigator(false);
    }
  }, []);

  return { getLocationByNavigator, geolocation, setGeolocation };
}
