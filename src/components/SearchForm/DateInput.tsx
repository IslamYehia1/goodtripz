import InputField from "./InputField";
import dateIcon from "../../icons/calendar_black.svg";

function focusHandler() {}
function handleKeyUp() {}
function blurHandler() {}
const DateInput = () => {
    return (
        <>
            <div id="dateSearchField" className="searchFieldWrapper">
                <InputField
                    focusHandler={focusHandler}
                    blurHandler={blurHandler}
                    handleKeyUp={handleKeyUp}
                    label="Date"
                    className="searchField"
                    icon={dateIcon}
                    name="departureDate"
                    placeholder="Pick date"
                />
                <InputField
                    focusHandler={focusHandler}
                    blurHandler={blurHandler}
                    handleKeyUp={handleKeyUp}
                    label="Return date"
                    className="searchField"
                    icon={dateIcon}
                    name="returnDate"
                    placeholder="Pick date"
                />
            </div>
        </>
    );
};

export default DateInput;
