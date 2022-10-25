import Button from "../../Button/Button";
import { PlusIcon, MinusIcon } from "../../Icons";
import style from "../SearchForm.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useUIContext } from "../../UI";
import { motion } from "framer-motion";
import {ExpandIcon} from "../../Icons"; //prettier-ignore
import useOutsideClick from "../../../utils/useOutsideClick";
const TravellersOptions = () => {
  const {
    addAdultTraveller,
    removeAdultTraveller,
    removeChildTraveller,
    addChildTraveller,
    adults,
    children,
  } = useFlightContext();
  const { isModalOn, activeField, setActiveField } = useUIContext();

  const travellersOptionsRef = useOutsideClick(activeField === "flightTravellersOptions", () => {
    setActiveField("");
  });
  return (
    <>
      <div
        ref={travellersOptionsRef as any}
        className={`${style.filterButtonWrapper}  ${
          activeField === "flightTravellersOptions" && isModalOn ? style.inModal : ""
        }`}
      >
        <Button
          icon={ExpandIcon}
          className={style.button}
          handleClick={() => {
            setActiveField("flightTravellersOptions");
            // if (isMobile) openModal("travellersOptions");
          }}
          type="button"
        >
          {`${parseInt(adults) + parseInt(children)} Travellers`}
        </Button>
        {activeField === "flightTravellersOptions" && (
          <motion.div
            initial={{ scaleY: 0, transformOrigin: "bottom center" }}
            animate={{ scaleY: 1 }}
            tabIndex={0}
            className={`${style.optionsWindow} ${isModalOn ? style.inModal : ""}`}
          >
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
          </motion.div>
        )}
      </div>
    </>
  );
};

export default TravellersOptions;
