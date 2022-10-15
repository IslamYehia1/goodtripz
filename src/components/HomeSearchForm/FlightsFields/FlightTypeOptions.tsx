import { ReactNode, useState } from "react";
import style from "../SearchForm.module.scss";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../../Icons"; //prettier-ignore
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useUIContext } from "../../UI";
import OneWayIcon from "../../../../public/icons/oneWay.svg";
import RoundTrip from "../../../../public/icons/roundTrip.svg";
import Button from "../../Button/Button";
import useOutsideClick from "../../../utils/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
type propsType = {
  // dispatch: any;
};
const FlightTypeOptions = () => {
  const { setFlightType, setActiveField, activeField, type } = useFlightContext();
  const { isModalOn } = useUIContext();
  const flightOptionsRef = useOutsideClick(activeField === "flightTypeOptions", () => {
    setActiveField("");
  });

  return (
    <>
      <div
        ref={flightOptionsRef as any}
        tabIndex={0}
        className={`${style.filterButtonWrapper} ${
          activeField === "flightTypeOptions" && isModalOn ? style.inModal : ""
        }`}
      >
        <Button
          icon={ExpandIcon}
          className={style.button}
          handleClick={() => {
            setActiveField("flightTypeOptions");
            // if (isMobile) openModal("flightTypeOptions");
          }}
          type="button"
        >
          {type === "oneWay" ? "One way" : "Round trip"}
        </Button>
        {activeField === "flightTypeOptions" && (
          <motion.div
            initial={{ scaleY: 0, transformOrigin: "bottom center" }}
            animate={{ scaleY: 1 }}
            tabIndex={0}
            className={`${style.optionsWindow} ${isModalOn ? style.inModal : ""}`}
          >
            <ul>
              <li
                onClick={() => {
                  // dispatch({ type: "flightType", val: "oneWay" });
                  setFlightType("oneWay");
                  setActiveField("");
                }}
              >
                <span>One Way</span>
                {/* <span className={style.flightTypeIcon}>
            <OneWayIcon />
          </span> */}
              </li>
              <li
                onClick={() => {
                  // dispatch({ type: "flightType", val: "roundTrip" });
                  setFlightType("roundTrip");
                  setActiveField("");
                }}
              >
                <span>Round Trip</span>
                {/* <span className={style.flightTypeIcon}>
            <RoundTrip />
          </span> */}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};
export default FlightTypeOptions;
