/* Range date picker maintains a local state that 
 gets an update from the global state when router.isReady */
import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import { useState, useEffect, useReducer, useRef, RefObject } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../utils/useIsMobile";
import { useFlightContext } from "../CommonContexts/FlightsContext";
import { useUIContext } from "../UI";

type propsType = {
  activeField?: string;
  // setActiveField: any;
  fromVal?: string;
  toVal?: string;
  className?: string;
  fieldClass?: string;
  wrapperClass?: string;
  rangeClass?: string;
  fromLabel?: string;
  toLabel?: string;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  textFieldClass?: string;
  range: Boolean;
  // dispatch: ({}: any) => void;
  onActivate: (x: "from" | "to") => void;
  onDeActivate: () => void;
  setFromDate: (date: Date) => void;
  setToDate: (date: Date) => void;
  fromDate: string;
  toDate: string;
};
type ACTIONTYPE = {
  type: "pullFromGlobalState" | "to" | "from" | "lastHoveredDay";
  from?: Date;
  to?: Date;
  lastHoveredDay?: Date;
};
type stateType = {
  from: Date;
  to: Date;
  lastHoveredDay: Date;
};
const RangeDatePicker = (props: propsType) => {
  const { isModalOn, openModal, closeModal } = useUIContext();
  const today = new Date();
  const router = useRouter();
  const isMobile = useIsMobile();

  function reducer(prevState: any, action: ACTIONTYPE) {
    switch (action.type) {
      case "pullFromGlobalState":
        if (props.fromDate && props.toDate) {
          return {
            from: new Date(props.fromDate),
            to: new Date(props.toDate),
            lastHoveredDay: new Date(props.toDate),
          };
        }
      case "from":
        return { ...prevState, from: action.from };
      case "to":
        return { ...prevState, to: action.to };
      case "lastHoveredDay":
        return { ...prevState, lastHoveredDay: action.lastHoveredDay };
      default:
        return prevState;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    from: undefined,
    to: undefined,
    lastHoveredDay: undefined,
  });

  useEffect(() => {
    if (state.from) {
      props.setFromDate(state.from);
    }
    if (state.to) {
      props.setToDate(state.to);
    }
    if (state.to && !state.from) {
      props.onActivate("from");
    }
    if (state.from && !state.to) {
      props.onActivate("to");
    }
    if (state.from && state.to) {
      props.onDeActivate();
    }
  }, [state.from, state.to]);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch({ type: "pullFromGlobalState" });
  }, [router.isReady]);

  return (
    <div
      className={`${props.className} RangePicker`}
      onBlur={(e) => {
        if (
          !isModalOn &&
          (!e.relatedTarget || !(e.relatedTarget as HTMLElement)!.closest(".RangePicker"))
        ) {
          props.onDeActivate();
        }
      }}
      onClick={props.onClick}
      tabIndex={0}
    >
      <FromDateField
        onFocus={() => {
          props.onActivate("from");
        }}
        isFocused={props.activeField === "from"}
        // isFocused={true}
        isMobile={isMobile}
        wrapperClass={props.wrapperClass}
        label={props.fromLabel}
        icon={props.icon}
        state={state}
        setState={dispatch}
        value={props.fromDate}
        today={today}
        singleDateClass={props.textFieldClass}
      />
      {/*Only show the second date input if we want a range date picker */}
      {props.range && (
        <ToDateField
          onFocus={() => {
            props.onActivate("to");
          }}
          isMobile={isMobile}
          isFocused={props.activeField === "to"}
          wrapperClass={props.wrapperClass}
          singleDateClass={props.textFieldClass}
          label={props.toLabel}
          icon={props.icon}
          state={state}
          setState={dispatch}
          value={props.toDate}
          today={today}
        />
      )}
    </div>
  );
};

export default RangeDatePicker;
