import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import style from "./RangeDatePicker.module.scss";
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
  onFromDateSelected?: (day: Date) => void;
  onToDateSelected?: (day: Date) => void;
  singleDateClass?: string;
  range: Boolean;
};
type ACTIONTYPE = {
  type: "fromURL" | "to" | "from" | "lastHoveredDay";
  from?: Date;
  to?: Date;
  lastHoveredDay?: Date;
};
const RangeDatePicker = (props: propsType) => {
  const today = new Date();
  const router = useRouter();
  // const fromVal = props.fromVal ? new Date(props.fromVal) : undefined;
  // const toVal = props.toVal ? new Date(props.toVal) : undefined;
  // const [state, setState] = useState<{ [key: string]: Date | undefined }>({
  //     from: undefined,
  //     to: undefined,
  //     lastHoveredDay: undefined,
  // });
  type stateType = {
    from: Date;
    to: Date;
    lastHoveredDay: Date;
  };
  function reducer(prevState: any, action: ACTIONTYPE) {
    switch (action.type) {
      case "fromURL":
        if (props.fromVal && props.toVal) {
          // console.log(new Date(props.fromVal), new Date(props.toVal));
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

  // function stateSetter(param: { [key: string]: Date | undefined }) {
  //     setState(param);
  // }
  useEffect(() => {
    if (!router.isReady) return;
    dispatch({ type: "fromURL" });
  }, [router.isReady]);

  return (
    <div className={props.rangeClass} onClick={props.onClick}>
      <FromDateField
        className={props.className}
        wrapperClass={props.wrapperClass}
        label={props.fromLabel}
        icon={props.icon}
        state={state}
        setState={dispatch}
        today={today}
        singleDateClass={props.singleDateClass}
        onDayChange={(day: Date) => {
          if (props.onFromDateSelected) props.onFromDateSelected(day);
        }}
      />
      {props.range && (
        <ToDateField
          className={props.className}
          wrapperClass={props.wrapperClass}
          singleDateClass={props.singleDateClass}
          label={props.toLabel}
          icon={props.icon}
          state={state}
          setState={dispatch}
          today={today}
          onDayChange={(day: Date) => {
            if (props.onToDateSelected) props.onToDateSelected(day);
          }}
        />
      )}
    </div>
  );
};

export default RangeDatePicker;
