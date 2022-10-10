import style from "../../../styles/SearchResults.module.scss";
import Button from "../Button/Button";
import { SearchIcon } from "../Icons";
const SidebarSections = () => {
  return (
    <>
      <div className={`${style.sideSection} ${style.priceRange}`}>
        <span>Price range</span>
        <input type="range" min="1" max="100" className={style.priceSlider} />
      </div>
      <div className={`${style.sideSection} ${style.addExtra}`}>
        <div className={`${style.addHotel}`}>
          <input type="checkbox" name="addHotel" />
          <label htmlFor="addHotel">Add hotel</label>
        </div>
        <div className={`${style.addCar}`}>
          <input type="checkbox" name="addCar" />
          <label htmlFor="addCar">Add car</label>
        </div>
      </div>
      <div>
        <Button
          handleClick={() => {}}
          className={`${style.button} ${style.updateSearchBtn}`}
          icon={SearchIcon}
        >
          Update
        </Button>
      </div>
    </>
  );
};
export default SidebarSections;
