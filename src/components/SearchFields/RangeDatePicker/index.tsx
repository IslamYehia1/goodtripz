import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import style from "../../SearchForm/SearchForm.module.scss";
import SearchModal from "../../Modal/SearchModal";
type propsType = {
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
  singleDateClass?: string;
  range: Boolean;
  dispatch: ({}: any) => void;
};
type ACTIONTYPE = {
  type: "fromURL" | "to" | "from" | "lastHoveredDay";
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
  const [fullScreen, setFullScreen] = useState(false);
  function reducer(prevState: any, action: ACTIONTYPE) {
    switch (action.type) {
      case "fromURL":
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
    if (!router.isReady) return;
    dispatch({ type: "fromURL" });
  }, [router.isReady]);

  return (
    <SearchModal
      closeModal={() => {
        setFullScreen(false);
      }}
      isFullScreen={fullScreen}
      className={style.modal}
    >
      <div
        className={props.className}
        onClick={props.onClick}
        onFocus={() => {
          if (window.innerWidth <= 650) setFullScreen(true);
        }}
      >
        <FromDateField
          wrapperClass={props.wrapperClass}
          label={props.fromLabel}
          icon={props.icon}
          state={state}
          setState={dispatch}
          today={today}
          singleDateClass={props.singleDateClass}
          onDayChange={(day: Date) => {
            props.dispatch({
              from: day.toISOString().substring(0, 10),
            });
          }}
        />
        {/*Only show the second date input if we want a range date picker */}
        {props.range && (
          <ToDateField
            wrapperClass={props.wrapperClass}
            singleDateClass={props.singleDateClass}
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
