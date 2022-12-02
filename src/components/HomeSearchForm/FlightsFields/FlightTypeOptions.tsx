import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useEffect, useState } from "react";
import SearchOption from "src/components/SearchOption";
import style from "../SearchForm.module.scss";

type propsType = {
  // dispatch: any;
};
const FlightTypeOptions = () => {
  const { setFlightType, type } = useFlightContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <SearchOption
        btnValue={type === "oneWay" ? "One way" : "Round trip"}
        isActive={isActive}
        onActivate={() => {
          setIsActive(true);
        }}
        onDeActivate={() => {
          setIsActive(false);
        }}
      >
        <div className={style.flightTypeOptions}>
          <div
            onClick={() => {
              setFlightType("oneWay");
              setIsActive(false);
            }}
          >
            <span>One Way</span>
          </div>
          <div
            onClick={() => {
              setFlightType("roundTrip");
              setIsActive(false);
            }}
          >
            <span>Round Trip</span>
          </div>
        </div>
      </SearchOption>
    </>
  );
};
export default FlightTypeOptions;
