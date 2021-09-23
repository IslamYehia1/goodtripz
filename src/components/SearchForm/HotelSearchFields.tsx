import Button from "../Button/Button";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import { SearchModal } from "../Modal/Modal";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";
import HotelSearch from "../HotelSearch/HotelSearch";
const HotelSearchFields = () => {
    function searchHandler() {}

    return (
        <div className="hotelSearchFields">
            <div className="options">
                <span className="travellers">
                    <Button
                        icon={ExpandArrow}
                        className="button"
                        handleClick={() => {}}
                    >
                        1 Traveller
                    </Button>
                </span>
                <span className="flightType">
                    <Button
                        icon={ExpandArrow}
                        className="button"
                        handleClick={() => {}}
                    >
                        Round trip
                    </Button>
                </span>
            </div>
            <div className="fields">
                <SearchModal
                    altClassName="aSearchField hotelSearchField"
                    className="modal"
                >
                    <HotelSearch inputClass="searchTextInput" />
                </SearchModal>

                <SearchModal
                    altClassName="aSearchField hotelSearchField dateSearchField"
                    className="modal"
                >
                    <DateInput />
                </SearchModal>
                <Button
                    handleClick={searchHandler}
                    icon={SearchIcon}
                    className="button searchButton"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};
export default HotelSearchFields;
