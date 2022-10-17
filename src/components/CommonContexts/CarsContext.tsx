import reducer from "../../utils/carsReducer";
import { useCallback, useReducer, useState, useMemo, createContext, useContext } from "react";
const initial = {
  pickUpLocation: "",
  pickUpDate: "",
  pickUpTime: "",
  dropOffLocation: "",
  dropOffDate: "",
  dropOffTime: "",
};
const CarsContext = createContext<any>(initial);
export function CarsSearchProvider(props: any) {
  const [searchTerms, dispatch] = useReducer(reducer, initial);
  const [activeField, setActiveField] = useState("");
  const setPickUpLocation = useCallback(
    (location: string) => {
      dispatch({ type: "pickUpLocation", val: location });
    },
    [dispatch]
  );
  const setDropOffLocation = useCallback(
    (location: string) => {
      dispatch({ type: "dropOffLocation", val: location });
    },
    [dispatch]
  );
  const setPickUpDate = useCallback(
    (date: string) => {
      (date: string) => {
        dispatch({ type: "pickUpDate", val: date });
      };
    },
    [dispatch]
  );
  const setPickUpTime = useCallback(
    (time: string) => {
      dispatch({ type: "pickUpTime", val: time });
    },
    [dispatch]
  );
  const setDropOffDate = useCallback(
    (date: string) => {
      dispatch({ type: "dropOffDate", val: date });
    },
    [dispatch]
  );
  const setDropOffTime = useCallback(
    (time: string) => {
      dispatch({ type: "dropOffTime", val: time });
    },
    [dispatch]
  );
  const value = useMemo(() => {
    return {
      ...searchTerms,
      activeField,
      setActiveField,
      setPickUpLocation,
      setPickUpDate,
      setPickUpTime,
      setDropOffLocation,
      setDropOffDate,
      setDropOffTime,
    };
  }, [searchTerms, activeField]);
  return <CarsContext.Provider value={value} {...props} />;
}
export const useCarsContext = () => {
  return useContext(CarsContext);
};
