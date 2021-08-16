import InputField from "./InputField";
import locationIcon from "../../icons/location.svg";
function focusHandler() {}
function blurHandler() {}
function handleKeyUp() {}
const HotelSearchFields = () => {
    return (
        <InputField
            focusHandler={focusHandler}
            blurHandler={blurHandler}
            handleKeyUp={handleKeyUp}
            placeholder="Hotel location"
            label="Going to"
            className="searchField"
            icon={locationIcon}
            name="hotelLocation"
        />
    );
};
export default HotelSearchFields;
