import { ReactNode, useState } from "react";
import style from "../SearchForm.module.scss";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../../Icons"; //prettier-ignore
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useUIContext } from "../../UI";

type propsType = {
  // dispatch: any;
};
const FlightTypeOptions = () => {
  const { setFlightType, setActiveField } = useFlightContext();
  const { isModalOn } = useUIContext();
  return (
    <div tabIndex={0} className={`${style.optionsWindow} ${isModalOn ? style.inModal : ""}`}>
      <ul>
        <li
          onClick={() => {
            // dispatch({ type: "flightType", val: "oneWay" });
            setFlightType("oneWay");
            setActiveField("");
          }}
        >
          One Way
        </li>
        <li
          onClick={() => {
            // dispatch({ type: "flightType", val: "roundTrip" });
            setFlightType("roundTrip");
            setActiveField("");
          }}
        >
          Round Trip
        </li>
      </ul>
    </div>
  );
};
export default FlightTypeOptions;
