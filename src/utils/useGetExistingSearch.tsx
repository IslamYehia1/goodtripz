import { useFlightContext } from "src/components/CommonContexts/FlightsContext";
import { useEffect } from "react";
export function useGetExistingFlight() {
  const {
    setFlightOrigin,
    setFlightDestination,
    setFlightDate,
    setReturnDate,
    setAdultsCount,
    setChildrenCount,
    setFlightType,
  } = useFlightContext();
  useEffect(() => {
    if (localStorage.flightParams) {
      const flightParams = JSON.parse(localStorage.flightParams);
      setFlightOrigin(flightParams.from.name, flightParams.from.IATA);
      setFlightDestination(flightParams.to.name, flightParams.to.IATA);
      setFlightDate(flightParams.date);
      setReturnDate(flightParams.returnDate);
      setChildrenCount(flightParams.children);
      setAdultsCount(flightParams.adults);
      setFlightType(flightParams.type);
    }
  }, []);
}
export function useGetExistingHotel() {}
