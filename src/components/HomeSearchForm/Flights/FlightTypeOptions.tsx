import { ReactNode, useState } from "react";
import style from "../SearchForm.module.scss";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../../Icons"; //prettier-ignore
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useFlightContext } from "../FlightsContext";
type propsType = {
  // dispatch: any;
};
const FlightTypeOptions = () => {
  const { setFlightType } = useFlightContext();
  return (
    <div className={style.optionsWindow}>
      <ul>
        <li
          onClick={() => {
            // dispatch({ type: "flightType", val: "oneWay" });
            setFlightType("oneWay");
          }}
        >
          One Way
        </li>
        <li
          onClick={() => {
            // dispatch({ type: "flightType", val: "roundTrip" });
            setFlightType("roundTrip");
          }}
        >
          Round Trip
        </li>
      </ul>
    </div>
  );
};
export default FlightTypeOptions;
