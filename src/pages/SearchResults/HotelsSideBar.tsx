import HotelSearch from "../../components/HotelSearch/HotelSearch";
import { FiltersModal, SearchModal } from "../../components/Modal/Modal";

const HotelsSideBar = () => {
    return (
        <div className="sideSection searchTerms">
            <SearchModal altClassName="lilSearchField" className="modal">
                <HotelSearch inputClass="" />
            </SearchModal>
        </div>
    );
};
export default HotelsSideBar;
