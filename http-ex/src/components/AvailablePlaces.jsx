import { useState } from "react";
import { useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  // then문법
  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((res) => res.json())
  //     .then((data) => setAvailablePlaces(data.places));
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchPlaces = async () => {
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedData = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedData);
          setIsLoading(false);
        });
      } catch (error) {
        setError({ message: error.message || "Failed to fetch" });
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="ERROR" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
