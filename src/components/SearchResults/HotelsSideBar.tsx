import HotelSearch from "../../components/SearchFields/HotelPlaceSearch/HotelPlaceSearch";
import { FiltersModal } from "../../components/Modal";
import DateInput from "../../components/SearchFields/RangeDatePicker";
import style from "../../../styles/SearchResults.module.scss";
import { useState } from "react";
import { hotelsSideBarT } from "./types";

const HotelsSideBar = (props: hotelsSideBarT) => {
  const [activeField, setActiveField] = useState<"placeSearch" | "checkInDate" | "checkOutDate" | "travellers" | "">(
    ""
  );
  return (
    <>
      <div className={`${style.sideSection} ${style.searchTerms}`}>
        <HotelSearch
          isActive={activeField === "placeSearch"}
          activate={() => setActiveField("placeSearch")}
          deactivate={() => setActiveField("")}
          inputWrapperClass={style.textFieldWrapper}
          label="Going to"
          // value={`${props.searchTerms.place}`}
          className={`${style.lilSearchField} ${style.lilHotelField}`}
          searchTerm={`${props.searchTerms.place}`}
          inputClass={style.searchInput}
          suggestionsClass={style.suggetionsClass}
          dispatch={props.dispatch}
        />
        <DateInput
          isActive={activeField}
          setActiveField={setActiveField}
          range={true}
          dispatch={({ from, to }) => {
            if (from) props.dispatch({ type: "checkIn", val: from });
            if (to) props.dispatch({ type: "checkOut", val: to });
          }}
          className={style.dateRangeWrapper}
          wrapperClass={style.lilSearchField}
          textFieldClass={style.textField}
          fromLabel="Check in"
          toLabel="Check out"
        />
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
            <div className={`${style.sideSection} ${style.priceRange}`}>
              <span>Price range</span>
              <input type="range" min="1" max="100" className="priceSlider" />
            </div>
            <div className={`${style.sideSection} ${style.addExtra}`}>
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
