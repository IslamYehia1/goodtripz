import style from "../../../styles/SearchResults.module.scss";
import useIsMobile from "../../utils/useIsMobile";
import Button from "../Button/Button";
import { SearchIcon } from "../Icons";
import { useUIContext } from "../UI";
import { useEffect, useState } from "react";
const SidebarSections = () => {
  const { activeField } = useUIContext();
  const isMobile = useIsMobile();
  const [activeOnMobile, setActiveOnMobile] = useState(false);
  useEffect(() => {
    if (!isMobile || (isMobile && activeField === "sidebarSections")) {
      setActiveOnMobile(true);
    } else {
      setActiveOnMobile(false);
    }
  }, [isMobile, activeField]);
  return (
    <>
      {activeOnMobile && (
        <div className={`${style.sideSections} ${isMobile ? style.inModal : ""}`}>
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
        </div>
      )}
    </>
  );
};
export default SidebarSections;
