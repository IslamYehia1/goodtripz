import React from "react";
import "./datePicker.scss";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DateIcon from "../../icons/calendar_black.svg"

  
  
export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.today = new Date();
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleFromClick = this.handleFromClick.bind(this);
        this.handleToClick = this.handleToClick.bind(this);
        this.handleFromMouseEnter = this.handleFromMouseEnter.bind(this);
        this.handleToMouseEnter = this.handleToMouseEnter.bind(this);
        this.toRef = React.createRef();
        this.fromRef = React.createRef();
        this.state = {
            from: null,
            to: null,
            latstHoveredDay: null,
        };
    }

    handleResetClick() {
        this.setState({
            from: null,
            to: null,
            latstHoveredDay: null,
        });
    }

    handleFromMouseEnter(day) {
        if (this.state.to && DateUtils.isDayAfter(day, this.state.to)) {
            this.setState({
                latstHoveredDay: null,
            });
            return;
        }
        if (!DateUtils.isDayBefore(day, this.today)) {
            this.setState({
                latstHoveredDay: day,
            });
        }
    }
    handleToMouseEnter(day) {
        if (this.state.from && DateUtils.isDayBefore(day, this.state.from)){
            this.setState({
                latstHoveredDay: null,
            });     
            return;
        }
        if (!DateUtils.isDayBefore(day, this.today)) {
            this.setState({
                latstHoveredDay: day,
            });
        }
    }

    handleFromClick(day) {
        if (this.state.to && DateUtils.isDayAfter(day, this.state.to)) {
            this.setState({
                to: null,
            });
            this.toRef.current.getInput().focus();
        }
        if (
            DateUtils.isSameDay(day, this.today) ||
            DateUtils.isDayAfter(day, this.today)
        ) {
            this.setState({
                from: day,
                latstHoveredDay: day,
            });
            if (!this.state.to) {
                this.toRef.current.getInput().focus();
            }
        }
    }

    handleToClick(day) {
        if (this.state.from && DateUtils.isDayBefore(day, this.state.from))
            return;
        this.setState({
            to: day,
            latstHoveredDay: day,
        });
        if (!this.state.from) this.fromRef.current.getInput().focus();
    }
    render() {
        const { from, to, latstHoveredDay } = this.state;
        const fromModifiers = to
            ? { start: to, end: latstHoveredDay }
            : { start: from, end: latstHoveredDay };
        const toModifiers = { start: from, end: latstHoveredDay };
        const fromSelectedDays = to ? { from: to, to: latstHoveredDay } : null;
        const toSelectedDays = from
            ? [from, { from: from, to: latstHoveredDay }]
            : null;
        return (
            <>
            <div className="searchFieldWrapper">
                <img src={DateIcon} alt="Date Icon" />
                <div className="searchField">
                    <label htmlFor={"fromDateInput"}>{"Departure"}</label>
                    <DayPickerInput
                        inputProps = {{className : this.props.fromClassName , name : "fromDateInput"}} 
                        fromMonth = {this.today} 
                        ref={this.fromRef}
                        value={this.state.from}
                        dayPickerProps={{
                            name : "to" , 
                            className: "Range",
                            numberOfMonths: 2,
                            fromMonth: this.today,
                            selectedDays: fromSelectedDays,
                            disabledDays: { before: new Date() },
                            modifiers: fromModifiers,
                            onDayClick: this.handleFromClick,
                            onDayMouseEnter: this.handleFromMouseEnter,
                        }}
                        // Pass a call back to onFromDayChange prop to handle state in the parent component
                        onDayChange={this.props.onFromDayChange}
                    />
                </div>
            </div>
            <div className="searchFieldWrapper">
                <img src={DateIcon} alt="Date Icon" />
                <div className="searchField">
                    <label htmlFor={"toDateInput"}>{"Departure"}</label>
                    <DayPickerInput
                        inputProps = {{className : this.props.toClassName , name : "toDateInput"}} 
                        ref={this.toRef}
                        value={this.state.to}
                        dayPickerProps={{
                            className: "Range",
                            numberOfMonths: 2,
                            fromMonth: this.today,
                            selectedDays: toSelectedDays,
                            disabledDays: [
                                { before: new Date() },
                                { before: this.state.from },
                            ],
                            modifiers: toModifiers,
                            onDayClick: this.handleToClick,
                            onDayMouseEnter: this.handleToMouseEnter,
                        }}
                        // Pass a call back to onToDayChange prop to handle state in the parent component
                        onDayChange={this.props.onToDayChange}
                    />
                </div>
            </div>
            <div>
                    {/* {!from && !to && "Please select the first day."}
                    {from && !to && "Please select the last day."}
                    {from &&
                        to &&
                        `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
                    {from && to && (
                        <button
                            className="link"
                            onClick={this.handleResetClick}
                        >
                            Reset
                        </button>
                    )} */}
                </div>
            </>
        );
    }
}
