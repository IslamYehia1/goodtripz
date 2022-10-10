import React, { useEffect, useState } from "react";
// import style from "./RangeDatePicker.module.scss";
import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { useUIContext } from "../UI";
const pastMonth = new Date(2020, 10, 15);
import "react-day-picker/dist/style.css";
import style from "./RangeDatePicker.module.scss";
import style2 from "../Suggestions/Suggestions.module.scss";
export default function App(props: any) {
  const defaultSelected: DateRange = {
    // from: pastMonth,
    from: undefined,
    // to: addDays(pastMonth, 4),
    to: undefined,
  };
  const { isModalOn, openModal, closeModal } = useUIContext();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  useEffect(() => {
    setRange(defaultSelected);
  }, [props.range]);
  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

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
      onFocus={() => {
        props.onActivate("date");
      }}
      onClick={props.onClick}
      tabIndex={0}
    >
      {props.activeField === "date" && (
        <div className={style.overlay}>
          <DayPicker
            className={`Range ${style2.suggestions} ${style2.datePickerOverlay}`}
            mode={props.range ? "range" : "single"}
            defaultMonth={new Date()}
            numberOfMonths={2}
            selected={range}
            //   footer={footer}
            onSelect={setRange}
          />
        </div>
      )}

      <div className={`${props.wrapperClass}`}>
        {props.icon && <props.icon />}
        <div className={props.singleDateClass}>
          <label htmlFor={"toDateInput"}>{props.label}</label>
          <input
            readOnly
            tabIndex={-1}
            value={range!.from ? format(range!.from, "P") : undefined}
            placeholder="Pick a date"
          />
        </div>
      </div>
      <div className={`${props.wrapperClass}`}>
        {props.icon && <props.icon />}
        <div className={props.singleDateClass}>
          <label htmlFor={"toDateInput"}>{props.label}</label>
          <input
            readOnly
            tabIndex={-1}
            value={range!.to ? format(range!.to, "P") : undefined}
            placeholder="Pick a date"
          />
        </div>
      </div>
    </div>
  );
}
