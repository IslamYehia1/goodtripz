import HotelSearch from "../../components/HotelSearch/HotelSearch";
import { FiltersModal, SearchModal } from "../../components/Modal/Modal";
import DateInput from "../../components/RangeDatePicker/RangeDatePicker";

const HotelsSideBar = () => {
    return (
        <>
            <div className="sideSection searchTerms">
                <SearchModal
                    altClassName="lilSearchField lilHotelField"
                    className="modal"
                >
                    <HotelSearch
                        label="Going to"
                        value="Cairo Festival City, Nasr City, Egypt"
                        inputClass="searchInput"
                    />
                </SearchModal>
                <SearchModal className="modal">
                    <DateInput
                        wrapperClass="lilDateFields"
                        fieldClass="lilSearchField"
                        className="searchInput"
                        fromLabel="Check in"
                        toLabel="Check out"
                    />
                </SearchModal>
            </div>
            <div className="sideSection priceRange">
                <span>Price range</span>
                <input type="range" min="1" max="100" className="priceSlider" />
            </div>
            <div className="sideSection addExtra">
                <div className="addHotel">
                    <input type="checkbox" name="addHotel" />
                    <label htmlFor="addHotel">Add hotel</label>
                </div>
                <div className="addCar">
                    <input type="checkbox" name="addCar" />
                    <label htmlFor="addCar">Add car</label>
                </div>
            </div>
        </>
    );
};
export default HotelsSideBar;
