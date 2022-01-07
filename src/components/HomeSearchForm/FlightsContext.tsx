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
  activeField?: string;
  setActiveField?: any;
  date: string;
  returnDate: string;
  adults: string;
  children: string;
  setFlightType?: any;
  setFlightOrigin?: any;
  setFlightDestination?: any;
  setFlightDate?: any;
  setReturnDate?: any;
  addAdultTraveller?: any;
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
};

const flightsContext = createContext<FLIGHTS_CONTEXT>(initial);

function FlightsProvider(props: any) {
  const [searchTerms, dispatch] = useReducer(reducer, initial);
  const [activeField, setActiveField] = useState("");

  const setFlightType = useCallback(
    (value) => {
      dispatch({ type: "flightType", val: value });
    },
    [dispatch]
  );

  const setFlightOrigin = useCallback(
    (origin, IATA) => {
      dispatch({ type: "from", val: origin, IATA: IATA });
    },
    [dispatch]
  );

  const setFlightDestination = useCallback(
    (destination, IATA) => {
      dispatch({ type: "to", val: destination, IATA: IATA });
    },
    [dispatch]
  );

  const setFlightDate = useCallback(
    (date) => {
      dispatch({ type: "date", val: date });
    },
    [dispatch]
  );

  const setReturnDate = useCallback(
    (returnDate) => {
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

  const addChildTraveller = useCallback(() => {
    dispatch({ type: "addChild" });
  }, [dispatch]);

  const removeChildTraveller = useCallback(() => {
    dispatch({ type: "removeChild" });
  }, [dispatch]);

  const value = useMemo(
    () => ({
      ...searchTerms,
      activeField,
      setActiveField,
      setFlightType,
      setFlightOrigin,
      setFlightDestination,
      setFlightDate,
      setReturnDate,
      addAdultTraveller,
      removeAdultTraveller,
      addChildTraveller,
      removeChildTraveller,
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
