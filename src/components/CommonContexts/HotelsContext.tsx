import { createContext, useReducer, useCallback, useMemo, useContext, useState } from "react";
import reducer from "../../utils/hotelsReducer";
type HOTELS_CONTEXT = {
  place: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  rooms: string;
  activeField?: string;
  setActiveField?: any;
  setHotelPlace?: any;
  setCheckInDate?: any;
  setCheckOutDate?: any;
  addAdultTraveller?: any;
  removeAdultTraveller?: any;
  addChildTraveller?: any;
  removeChildTraveller?: any;
};

const initial = {
  place: "",
  checkIn: "",
  checkOut: "",
  adults: "1",
  children: "0",
  rooms: "1",
};

const HotelsContext = createContext<HOTELS_CONTEXT>(initial);

export function HotelSearchProvider(props: any) {
  const [searchTerms, dispatch] = useReducer(reducer, initial);
  const [activeField, setActiveField] = useState("");
  const setHotelPlace = useCallback(
    (place: string) => {
      dispatch({ type: "place", val: place });
    },
    [dispatch]
  );
  const setCheckInDate = useCallback(
    (date: string) => {
      dispatch({ type: "checkIn", val: date });
    },
    [dispatch]
  );
  const setCheckOutDate = useCallback(
    (date: string) => {
      dispatch({ type: "checkOut", val: date });
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
  const value = useMemo(() => {
    return {
      ...searchTerms,
      activeField,
      setActiveField,
      setHotelPlace,
      setCheckInDate,
      setCheckOutDate,
      addAdultTraveller,
      removeAdultTraveller,
      addChildTraveller,
      removeChildTraveller,
    };
  }, [searchTerms, activeField]);
  return <HotelsContext.Provider value={value} {...props} />;
}

export const useHotelsContext = () => {
  const context = useContext(HotelsContext);
  return context;
};
