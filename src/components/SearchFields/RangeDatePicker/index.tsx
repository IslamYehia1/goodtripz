/* Range date picker maintains a local state that 
 gets an update from the global state when router.isReady */
import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import { useState, useEffect, useReducer, useRef, RefObject } from "react";
import { useRouter } from "next/router";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import SearchModal from "../../Modal/SearchModal";
import useIsMobile from "../../../utils/useIsMobile";
import Button from "../../Button/Button";
type propsType = {
  isActive: string;
  setActiveField: any;
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
  dispatch: ({}: any) => void;
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
  const today = new Date();
  const router = useRouter();
  const wrapperRef = useRef<any>(null);
  const [fullScreen, setFullScreen] = useState(false);
  const isMobile = useIsMobile();

  const [isFocused, setIsFocused] = useState("");

  function reducer(prevState: any, action: ACTIONTYPE) {
    switch (action.type) {
      case "pullFromGlobalState":
        if (props.fromVal && props.toVal) {
          return {
            from: new Date(props.fromVal),
            to: new Date(props.toVal),
            lastHoveredDay: new Date(props.toVal),
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
    if (!props.setActiveField) return;
    if (state.to && !state.from) {
      props.setActiveField("from");
    }
    if (state.from && !state.to) {
      props.setActiveField("to");
    }
    if (state.from && state.to) {
      props.setActiveField("");
    }
  }, [state.from, state.to]);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch({ type: "pullFromGlobalState" });
  }, [router.isReady]);

  useEffect(() => {
    if (state.from && state.to) {
      setFullScreen(false);
    }
  }, [state.from, state.to]);

  return (
    <SearchModal
      closeModal={() => {
        setFullScreen(false);
        props.setActiveField("");
      }}
      isFullScreen={fullScreen}
      className={style.modal}
    >
      <div
        className={props.className}
        onFocus={() => {
          if (window.innerWidth <= 650) {
            setFullScreen(true);
          }
        }}
        onClick={props.onClick}
        ref={wrapperRef}
      >
        <FromDateField
          handleFocus={() => {
            props.setActiveField("from");
            if (isMobile) setFullScreen(true);
          }}
          isFocused={props.isActive === "from"}
          setFocused={props.setActiveField}
          isMobile={isMobile}
          isFullScreen={fullScreen}
          wrapperClass={props.wrapperClass}
          label={props.fromLabel}
          icon={props.icon}
          state={state}
          setState={dispatch}
          today={today}
          singleDateClass={props.textFieldClass}
          onDayChange={(day: Date) => {
            props.dispatch({
              from: day.toISOString().substring(0, 10),
            });
          }}
        />
        {/*Only show the second date input if we want a range date picker */}
        {props.range && (
          <ToDateField
            handleFocus={() => {
              props.setActiveField("to");
              if (isMobile) setFullScreen(true);
            }}
            isFullScreen={fullScreen}
            isMobile={isMobile}
            isFocused={props.isActive === "to"}
            setFocused={props.setActiveField}
            wrapperClass={props.wrapperClass}
            singleDateClass={props.textFieldClass}
            label={props.toLabel}
            icon={props.icon}
            state={state}
            setState={dispatch}
            today={today}
            onDayChange={(day: Date) => {
              props.dispatch({
                to: day.toISOString().substring(0, 10),
              });
            }}
          />
        )}
      </div>
    </SearchModal>
  );
};

export default RangeDatePicker;
