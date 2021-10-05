import HotelSearch from "../../components/SearchFields/HotelPlaceSearch/HotelPlaceSearch";
import { FiltersModal, SearchModal } from "../../components/Modal";
import DateInput from "../../components/SearchFields/RangeDatePicker";
import style from "../../../styles/SearchResults.module.scss";
import { hotelsSideBarT } from "./types";
const HotelsSideBar = (props: hotelsSideBarT) => {
    return (
        <>
            <div className={`${style.sideSection} ${style.searchTerms}`}>
                <SearchModal
                    altClassName={`${style.lilSearchField} ${style.lilHotelField}`}
                    className="modal"
                >
                    <HotelSearch
                        inputWrapperClass={style.searchInputWrapper}
                        label="Going to"
                        value="Cairo Festival City, Nasr City, Egypt"
                        inputClass={style.searchInput}
                    />
                </SearchModal>
                <SearchModal className="modal">
                    <DateInput
                        rangeClass={style.lilDateFields}
                        singleDateClass={style.lilSearchField}
                        className={style.searchInput}
                        fromLabel="Check in"
                        toLabel="Check out"
                    />
                </SearchModal>
            </div>
            <FiltersModal
                closeModal={() => {
                    props.closeModal();
                }}
                isOpen={props.isFullScreen}
                className="modal"
            >
                {(!props.isMobile || props.isFullScreen) && (
                    <>
                        <div
                            className={`${style.sideSection} ${style.priceRange}`}
                        >
                            <span>Price range</span>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                className="priceSlider"
                            />
                        </div>
                        <div
                            className={`${style.sideSection} ${style.addExtra}`}
                        >
                            <div className={style.addHotel}>
                                <input type="checkbox" name="addHotel" />
                                <label htmlFor="addHotel">Add hotel</label>
                            </div>
                            <div className={style.addCar}>
                                <input type="checkbox" name="addCar" />
                                <label htmlFor="addCar">Add car</label>
                            </div>
                        </div>
                    </>
                )}
            </FiltersModal>
        </>
    );
};
export default HotelsSideBar;
