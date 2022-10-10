import Button from "../../Button/Button";
import { PlusIcon, MinusIcon } from "../../Icons";
import style from "../SearchForm.module.scss";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import useIsMobile from "../../../utils/useIsMobile";
const TravellersOptions = () => {
  const {
    addAdultTraveller,
    removeAdultTraveller,
    removeChildTraveller,
    addChildTraveller,
    adults,
    children,
  } = useHotelsContext();
  const isModalOn = useIsMobile();
  return (
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
  );
};

export default TravellersOptions;