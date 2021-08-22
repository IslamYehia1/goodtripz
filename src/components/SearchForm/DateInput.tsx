import DatePicker from "./DatePicker.js";
import dateIcon from "../../icons/calendar_black.svg";

function focusHandler() {}
function handleKeyUp() {}
function blurHandler() {}
const DateInput = () => {
    return (
        <>
            <div id="dateSearchField" className="searchFieldWrapper">
                <DatePicker />
            </div>
        </>
    );
};

export default DateInput;
