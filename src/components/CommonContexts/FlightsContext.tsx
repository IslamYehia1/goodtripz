import React, {
  useState,
  useContext,
  createContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import reducer from "../../utils/flightsSearchReducer";
import { useRouter } from "next/router";
type FLIGHTS_CONTEXT = {
  type: string;
  from: {
    name: string;
    IATA: string;
  };
  to: {
    name: string;
    IATA: string;
  };
  chosenFlight: any;
  setChosenFlight?: any;
  activeField?: string;
  setActiveField?: any;
  date: string;
  returnDate: string;
  adults: string;
  children: string;
  setFlightType?: any;
  setFlightOrigin: (airportName: string, IATA: string) => void;
  setFlightDestination: (airportName: string, IATA: string) => void;
  setFlightDate?: any;
  setReturnDate?: any;
  addAdultTraveller?: any;
  setAdultsCount?: any;
  setChildrenCount?: any;
  removeAdultTraveller?: any;
  addChildTraveller?: any;
  removeChildTraveller?: any;
};
const initial = {
  type: "roundTrip",
  from: { name: "", IATA: "" },
  to: { name: "", IATA: "" },
  date: "",
  returnDate: "",
  adults: "1",
  children: "0",
  chosenFlight: {},
  setFlightOrigin: () => {},
  setFlightDestination: () => {},
};

const flightsContext = createContext<FLIGHTS_CONTEXT>(initial);

function FlightsProvider(props: any) {
  const [searchTerms, dispatch] = useReducer(reducer, initial);
  const [activeField, setActiveField] = useState("");
  const router = useRouter();
  const setChosenFlight = useCallback(
    (offer: any) => {
      dispatch({ type: "chosenFlight", val: offer });
    },
    [dispatch]
  );
  const setFlightType = useCallback(
    (value: string) => {
      dispatch({ type: "flightType", val: value });
    },
    [dispatch]
  );

  const setFlightOrigin = useCallback(
    (origin: string, IATA: string) => {
      dispatch({ type: "from", val: origin, IATA: IATA });
    },
    [dispatch]
  );

  const setFlightDestination = useCallback(
    (destination: string, IATA: string) => {
      dispatch({ type: "to", val: destination, IATA: IATA });
    },
    [dispatch]
  );

  const setFlightDate = useCallback(
    (date: any) => {
      dispatch({ type: "date", val: date });
    },
    [dispatch]
  );

  const setReturnDate = useCallback(
    (returnDate: any) => {
      dispatch({ type: "returnDate", val: returnDate });
    },
    [dispatch]
  );
  const addAdultTraveller = useCallback(() => {
    dispatch({ type: "addAdult" });
  }, [dispatch]);

  const removeAdultTraveller = useCallback(() => {
    dispatch({ type: "removeAdult" });
  }, [dispatch]);
  const setAdultsCount = useCallback(
    (val: any) => {
      dispatch({ type: "adultsCount", val: val });
    },
    [dispatch]
  );
  const setChildrenCount = useCallback(
    (val: any) => {
      dispatch({ type: "childrenCount", val: val });
    },
    [dispatch]
  );
  const addChildTraveller = useCallback(() => {
    dispatch({ type: "addChild" });
  }, [dispatch]);

  const removeChildTraveller = useCallback(() => {
    dispatch({ type: "removeChild" });
  }, [dispatch]);
  const pullFromUrl = useCallback(
    (query: any) => {
      dispatch({ type: "pullFromUrl", query: query });
    },
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...searchTerms,
      activeField,
      setChildrenCount,
      setAdultsCount,
      setActiveField,
      setFlightType,
      setChosenFlight,
      setFlightOrigin,
      setFlightDestination,
      setFlightDate,
      setReturnDate,
      addAdultTraveller,
      removeAdultTraveller,
      addChildTraveller,
      removeChildTraveller,
      pullFromUrl,
    }),
    [searchTerms, activeField]
  );
  return <flightsContext.Provider value={value} {...props} />;
}
export const useFlightContext = () => {
  const context = useContext(flightsContext);
  return context;
};

export { flightsContext, FlightsProvider };
