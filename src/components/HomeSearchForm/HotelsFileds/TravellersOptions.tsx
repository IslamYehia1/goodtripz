import Button from "../../Button/Button";
import { PlusIcon, MinusIcon } from "../../Icons";
import style from "../SearchForm.module.scss";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import useIsMobile from "../../../utils/useIsMobile";
import { ExpandIcon } from "../../Icons";
import useOutsideClick from "../../../utils/useOutsideClick";
import { useUIContext } from "../../UI";

const TravellersOptions = () => {
  const {
    addAdultTraveller,
    removeAdultTraveller,
    removeChildTraveller,
    addChildTraveller,
    adults,
    children,
  } = useHotelsContext();
  const { activeField, setActiveField } = useUIContext();
  const isMobile = useIsMobile();
  const ref: any = useOutsideClick(activeField === "HotelsTravellersOptions", () => {
    setActiveField("");
  });
  const { isModalOn } = useUIContext();
  return (
    <>
      <div
        // onBlur={handleOutsideClick}
        ref={ref}
        className={`${style.filterButtonWrapper} ${
          activeField === "hotelsTravellersOptions" && isModalOn ? style.inModal : ""
        }`}
      >
        <Button
          icon={ExpandIcon}
          className={style.button}
          handleClick={() => {
            if (!isMobile && activeField === "hotelsTravellersOptions") setActiveField("");
            else setActiveField("hotelsTravellersOptions");
          }}
          type="button"
        >
          {`${parseInt(adults) + parseInt(children)} Travellers`}
        </Button>
        {activeField === "hotelsTravellersOptions" && (
          <div className={`${style.optionsWindow} ${isModalOn ? style.inModal : ""}`}>
            <ul>
              <li>
                <Button handleClick={addAdultTraveller} icon={PlusIcon} />
                <span>{`${adults} Adults`}</span>
                <Button handleClick={removeAdultTraveller} type="button" icon={MinusIcon} />
              </li>
              <li>
                <Button handleClick={addChildTraveller} icon={PlusIcon} type="button" />
                {`${children} Children`}
                <Button handleClick={removeChildTraveller} type="button" icon={MinusIcon} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default TravellersOptions;
